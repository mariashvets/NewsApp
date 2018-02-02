import {INCREMENT} from '../constants';

export default (number=0, action) => {
    return action.type === INCREMENT ? number + 1 : number;
};