const LEVELS = {
    'LEVEL_1': 1,
    'LEVEL_2': 2,
    'LEVEL_3': 3,
    'LEVEL_4': 4
};

export default {
    levels: [LEVELS.LEVEL_1, LEVELS.LEVEL_2, LEVELS.LEVEL_3, LEVELS.LEVEL_4],
    level_timeouts: {
        [LEVELS.LEVEL_1]: 10000,
        [LEVELS.LEVEL_2]: 9000,
        [LEVELS.LEVEL_3]: 8000,
        [LEVELS.LEVEL_4]: 7000
    },
    score_per_cell_per_level: {
        [LEVELS.LEVEL_1]: 1,
        [LEVELS.LEVEL_2]: 2,
        [LEVELS.LEVEL_3]: 3,
        [LEVELS.LEVEL_4]: 4
    },
    cell_timeout_per_level: {
        [LEVELS.LEVEL_1]: 1000,
        [LEVELS.LEVEL_2]: 900,
        [LEVELS.LEVEL_3]: 700,
        [LEVELS.LEVEL_4]: 500
    },
    cut_off_per_level: {
        [LEVELS.LEVEL_1]: 10,
        [LEVELS.LEVEL_2]: 15,
        [LEVELS.LEVEL_3]: 20,
        [LEVELS.LEVEL_4]: 25
    },
    rows_per_level: {
        [LEVELS.LEVEL_1]: 3,
        [LEVELS.LEVEL_2]: 4,
        [LEVELS.LEVEL_3]: 5,
        [LEVELS.LEVEL_4]: 6
    }
}