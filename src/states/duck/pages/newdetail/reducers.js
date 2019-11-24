import * as Types from './types';

var initialState = {
    rows: [],
    rowEditing: {},
    ranks: [],
    news: [],
    connectHub: false,
    showRule: false
};

const updateVoteShare = (state, action, vote, share) => {
    let indexRow = state.rows.findIndex(m => m.id == action.message.id);
    if (indexRow != -1) {
        let itemRow = state.rows[indexRow];
        if (vote) {
            itemRow.countvote = action.message.countVote;
        }
        if (share) {
            itemRow.countshare = action.message.countShare;
        }
        itemRow.score = action.message.score;
        state.rows[indexRow] = { ...itemRow };
    }

    let indexRank = state.ranks.findIndex(m => m.id == action.message.id);
    if (indexRank != -1) {
        let itemRank = state.ranks[indexRank];
        if (vote) {
            itemRank.countvote = action.message.countVote;
        }
        if (share) {
            itemRank.countshare = action.message.countShare;
        }
        itemRank.score = action.message.score;
        state.ranks[indexRank] = { ...itemRank };
    }
    return state;
}

const disableVoteShare = (state, action, vote, share) => {
    let indexRow = state.rows.findIndex(m => m.id == action.row.id);
    if (indexRow != -1) {
        let itemRow = state.rows[indexRow];
        if (vote) {
            itemRow.voted = 1;
        }
        if (share) {
            itemRow.shared = 1;
        }
        state.rows[indexRow] = { ...itemRow };
    }
    return state;
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.LOAD_SUBMISSION_ALL:
            state.rows = action.rows;
            break;
        case Types.LOAD_RANKSUBMISSION_ALL:
            state.ranks = action.rows;
            break;
        case Types.LOAD_POST_ALL:
            state.news = action.rows;
            break;

        case Types.LOAD_SUBMISSION_ALL:
            // state.rows = action.rows;
            break;

        case Types.VOTED_SUBMISSION_USER:
            state = disableVoteShare(state, action, true, false);
            break;

        case Types.SHARED_SUBMISSION_USER:
            state = disableVoteShare(state, action, false, true);
            break;

        case Types.CONNECT_HUB:
            state.connectHub = true;
            break;

        case Types.SET_VOTE_BY_USER:
            state = updateVoteShare(state, action, true, false);
            break;

        case Types.SET_SHARED_BY_USER:
            state = updateVoteShare(state, action, false, true);
            break;

        case Types.SHOW_RULE:
            state.showRule = !state.showRule;
            break;
    }
    return { ...state };
}

export default reducer