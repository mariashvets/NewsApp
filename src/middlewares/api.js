import $ from 'jquery';
import {SUCCESS, FAIL, START} from "../constants";

export default store => next => action => {
    const {callAPI, type, ...rest} = action;
    if (!callAPI) return next(action);

    next({
        type: type + START,
        ...rest
    });


    //DEV ONLY
    setTimeout(() => {
        $.get(callAPI)
            .done(response => next({...rest, type: type + SUCCESS, response}))
            .fail(response => next({...rest, type: type + FAIL, response}))
    }, 1000)
}
