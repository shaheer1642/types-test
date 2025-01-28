export type TRole = 'admin' | 'manager' | 'employee' | 'customer';
export type TLang = 'en' | 'ar' | 'zh';
export type TStepStatus = 'validating' | 'pending' | 'awaiting' | 'completed';
export type TOrderStatus = 'pending' | 'awaiting' | 'validating' | 'completed';
export interface IUser {
    user_id: number;
    name: string;
    avatar_url: string | null;
    role: TRole;
    email: string;
    password: string;
    is_deleted: boolean;
    creation_timestamp: Date
}
export interface IAdmin {
    user_id: number;
    name: string;
    avatar_url: string | null;
    role: 'admin';
    email: string;
    password: string;
    is_deleted: boolean;
    creation_timestamp: Date
}
export interface IManager {
    user_id: number;
    name: string;
    avatar_url: string | null;
    role: 'manager';
    email: string;
    password: string;
    is_deleted: boolean;
    creation_timestamp: Date
}
export interface IEmployee {
    user_id: number;
    name: string;
    avatar_url: string | null;
    role: 'employee';
    email: string;
    password: string;
    is_deleted: boolean;
    creation_timestamp: Date
}
export interface ICustomer {
    user_id: number;
    name: string;
    avatar_url: string | null;
    role: 'customer';
    email: string;
    password: string;
    is_deleted: boolean;
    creation_timestamp: Date
}

export interface IBranch {
    branch_id: number;
    created_by: number;
    branch_name: ITranslation;
    branch_header_url: string;
    branch_logo_url: string;
    is_deleted: boolean;
    creation_timestamp: Date;
    branch_managers: number[];
}

export interface ITranslation {
    id?: number,
    translation_type?: string,
    en?: string,
    ar?: string,
    zh?: string
}
export interface IUserInvite {
    id: number,
    email: string,
    role: 'manager' | 'employee',
    invite_token: string,
    invited_by: number,
    is_used: boolean,
    expiry_timestamp: Date,
    creation_timestamp: Date
}

export interface IService {
    service_id: number;
    branch_id: number;
    created_by: number;
    service_name: ITranslation;
    service_desc: ITranslation;
    service_price: number;
    is_per_head: boolean;
    is_deleted: boolean;
    creation_timestamp: Date;
    service_header_url: string;
    steps?: IStep[];
    service_version: number;
}

export interface IStep {
    service_id?: number;
    step_id?: number;
    step_name: ITranslation;
    fields?: IField[];
}

export interface IField {
    field_id?: number;
    service_id?: number;
    step_id?: number;
    field_type: 'text' | 'number' | 'file' | 'select' | 'multiselect';
    field_required: boolean;
    field_placeholder?: ITranslation;
    field_multiline: number;
    field_label: ITranslation;
    field_desc: ITranslation;
    field_options?: ITranslation[];
    field_value?: string | number | ITranslation | ITranslation[]
}

export interface IChatbotQuestion {
    question_id: number;
    message: ITranslation;
    parent_id: number;
    position_x: number;
    position_y: number;
    is_question: boolean;
}
export interface ILivechatMessage {
    message_id: number;
    sender_id: number;
    receiver_id: number | null;
    message: string;
    read_by_receiver: boolean;
    creation_timestamp: Date;
}

export interface IFormObject {
    step_id: number;
    step_name: ITranslation;
    fields: IField[];
    step_status: TStepStatus;
    pending_reason: string | null;
    status_update_timestamp: string;
}
export interface IOrder {
    order_id: number;
    service_id: number;
    ordered_by: number;
    assigned_to: number | null;
    assigned_by: number | null;
    transaction_id: number | null;
    service_form: IFormObject[];
    order_details: IFormObject[];
    order_status: TOrderStatus;
    order_amount: number;
    order_amount_mult: number;
    order_amount_total: number;
    lang: TLang;
    service?: IService;
    branch?: IBranch;
    customer?: ICustomer;
    employee?: IEmployee | null;
    creation_timestamp: Date;
}