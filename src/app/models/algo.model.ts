import { Asset } from "./asset.model";

export interface Algo {
    id: string;
    name: string;
    asset: Asset;
    criterion: string;
    max_depth: number;
    n_estimators: number;
    random_state: number;
    learning_rate: number;
    splitter: string;
    isActive: boolean;
    accuracy: number;
    prediction: number;
    predictions_total: number;
    predictions_correct: number;
    last_updated: string;
    last_tuning: string;
}