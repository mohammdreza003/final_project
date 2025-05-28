class Dynamichash{
    constructor(){
        this.size = 11;

        this.table = Array(this.size).fill(null);
        this.num_element = 0;
        this.deleted = 'deleted';
    };
    _hash_Function(key){
        let a = 0.6188033;
        return parseInt(this.size *((key * a) % 1));
    };
    _reHash(new_size){
        const old_table = this.table;
        this.table = Array(new_size).fill(null);
        this.size = new_size;
        this.num_element = 0;
        this._rehash_item(old_table);
        
    };
    _resize_if_needed(){
        const loud_factor = this.num_element / this.size;
        if (loud_factor>=0.75){
            this._reHash(this.size*2);
        }else if(loud_factor<0.25 && this.size >11){
            this._reHash(this.size / 2 | 0);
        };
    }
   _rehash_item(old_table){
    old_table.forEach(item => {
        if (item != null && item != this.deleted){
            this._insert_without_resize(item);
        }
    });
}

    _insert_without_resize(item){
        let index = this._hash_Function(item);
        let i = 0;
        while(this._is_slot_taken(index)){
            if (this.table[index] == item){
                return false;
            };
            i++;
            index = this._next_index(index , i);
        };
        this.table[index] = item;
        this.num_element ++;
        return true;
    };
    _is_slot_taken(index){
        return this.table[index] != null && this.table[index] != this.deleted;
    };
    _next_index(index , i){
        return (index + i * i)% this.size
    };
    insert(item){
        this._resize_if_needed();
        return this._insert_without_resize(item);
    };
    delete(item){
        let index = this._hash_Function(item);
        let attempts = 0;
        const max_attempts = this.size;
        while(attempts < max_attempts){
            if (!this._is_slot_taken(index)){
                break
            }else if (this.table[index] == item){
                this._delete_item(index);
                return true
            };
            index = this._next_index(index , attempts)
            attempts = attempts + 1;
        };
        return false;
    };
    _delete_item(index){
        this.table[index] = this.deleted;
        this.num_element -- ;
        this._resize_if_needed();
    };


}