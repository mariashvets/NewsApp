import {ADD_COMMENT, LOAD_ARTICLE_COMMENTS, LOAD_COMMENTS_PAGE, SUCCESS} from "../constants";
import {OrderedMap , Map, Record} from 'immutable';
import {arrayToMap} from "../utils";


const CommentModel = Record ({
    id: null,
    user: '',
    text: ''

});

const DefaultReducerState = Record({
    entities: new OrderedMap({}),
    loadedPages: new OrderedMap({}),
    totalComments: 0
});

export default (comments = DefaultReducerState(), action) => {
    const {type, payload, randomId, response} = action;

    switch (type) {
        case ADD_COMMENT:
            return comments.setIn(['entities', randomId], new CommentModel({
                ...payload.comment,
                id: randomId
            }));

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return comments.mergeIn(['entities'], arrayToMap(response, CommentModel));

        case LOAD_COMMENTS_PAGE + SUCCESS:
            return comments
                .setIn(['loadedPages', payload.page], response.records)
                .mergeIn(['entities'], arrayToMap(response.records, CommentModel))
                .set('totalComments', response.total)
    }
    return comments;
}
