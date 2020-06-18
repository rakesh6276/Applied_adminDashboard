export interface IConsoles {
    id: number;
    mac_id: string;
    location: string;
    is_active:boolean;
    created_on:TimeRanges;
    updated_on:TimeRanges;
}


export interface IOwners {
    id:number;
    rfid:string;
    first_name:string;
    last_name:string;
    email:string;
}

export interface IToolCat {
    id:number;
    category_name:string;
    percentage:number;
}


export class AddTools {
    public name:string = '';
                public bay_number:string;
                public bay:any;
                public tool_owner:number;
                public tool_users:number;
                public tool_category:number;
                public status:string = 'ID';
                public is_active:Boolean=false; 
    
  }
  

export class Swaptools{
    public too1:any;
    public too2:any;
}