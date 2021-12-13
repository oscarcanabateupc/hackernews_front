export interface Comment {
    id:number
    body:string
    commentable_type:string
    commentable_id:number
    points:number
    user_id:number
    created_at:Date
    updated_at:Date
}
