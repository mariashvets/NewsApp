import {ADD_COMMENT} from '../constants';

export default store => next => action => {

    if (action.type === ADD_COMMENT) {
        action.payload.comment.id = Math.random().toString(36).substr(2, 9);

        console.log('newPayload', action.payload);
    }
    next(action);
}

