import { Algo } from "./algo.model";
import { Hitratio } from "./hitratio.models";
import { Tag } from "./tag.model";

export interface Asset {
    id: string;
    symbol: string;
    platformsymbol: string;
    timeframe: string;
    identifier: string;
    description: string;
    name: string;
    cg_name: string;
    last_prediction: number;
    current_prediction: number;
    ups: number;
    downs: number;
    predictions_total: number;
    predictions_correct: number;
    accuracy: number;
    sentiment: number;
    isactive: boolean;
    tags: Tag[]; 
    models: Algo[]; 
    prediction_term: string;
    term: string;
    last_updated: string;
    candles: string;
    last_close: number;
    current_price: number;
    hitratios: Hitratio[]; 
}