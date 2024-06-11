// src/tasks/schemas/task.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Task extends Document {
    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    deadline: Date;

    @Prop({ required: true })
    priority: string;

    @Prop({ default: 'to-do' })
    status: string;

    @Prop({ type: String, ref: 'User' })
    user: string;

    @Prop({ default: null })
    deleted_at: Date | null;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
