import { ControlLaw } from '@fmgc/guidance/ControlLaws';

enum LateralMode {
    NONE = 0,
    HDG = 10,
    TRACK = 11,
    NAV = 20,
    LOC_CPT = 30,
    LOC_TRACK = 31,
    LAND = 32,
    FLARE = 33,
    ROLL_OUT = 34,
    RWY = 40,
    RWY_TRACK = 41,
    GA_TRACK = 50,
}

enum VerticalMode {
    NONE = 0,
    ALT = 10,
    ALT_CPT = 11,
    OP_CLB = 12,
    OP_DES = 13,
    VS = 14,
    FPA = 15,
    ALT_CST = 20,
    ALT_CST_CPT = 21,
    CLB = 22,
    DES = 23,
    GS_CPT = 30,
    GS_TRACK = 31,
    LAND = 32,
    FLARE = 33,
    ROLL_OUT = 34,
    SRS = 40,
    SRS_GA = 41,
}

export {
    ControlLaw,
    LateralMode,
    VerticalMode,
};
