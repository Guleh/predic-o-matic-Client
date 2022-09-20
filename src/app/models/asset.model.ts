import { Algo } from "./algo.model";
import { Tag } from "./tag.model";

export interface Asset {
    id: string;
    symbol: string;
    timeframe: string;
    identifier: string;
    description: string;
    name: string;
    last_prediction: number;
    current_prediction: number;
    ups: number;
    downs: number;
    predictions_total: number;
    predictions_correct: number;
    accuracy: number;
    sentiment: number;
    isactive: boolean;
    last_updated: boolean;
    tags: Tag[]; 
    models: Algo[]; 
    candles: string;
}