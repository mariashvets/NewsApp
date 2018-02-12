import {OrderedMap, Map} from 'immutable';

export function arrayToMap (arr, RecordModel) {
    return arr.reduce((acc, el) => acc.set(el.id, RecordModel ? new RecordModel(el) : el), new OrderedMap({}));
}

export function mapToArray (obj) {
    return obj.valueSeq().toArray();
}

