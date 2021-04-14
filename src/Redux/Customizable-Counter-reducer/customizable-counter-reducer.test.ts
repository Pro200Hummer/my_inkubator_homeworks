import {
    CustomizableCounterStateType,
    customizableCounterReducer,
    incrementCountAC,
    maxCountChangerAC, resetCounterAC, startCountChangerAC
} from "./customizable-counter-reducer";

let initState: CustomizableCounterStateType;
beforeEach(() => {
    initState = {
        startCount: 0,
        count: 0,
        maxCount: 0,
        buttonIncDisable: false,
        buttonResetDisable: false,
        buttonSetDisable: true,
        errorMessage: "Incorrect value",
        infoMessage: "Enter values and press set"
    }
})


test("the max count value should change", () => {
    const action = maxCountChangerAC(5);
    const finalState = customizableCounterReducer(initState, action)
    const endCount = finalState.maxCount

    expect(endCount).toBe(5)
})
test("the start count value should change", () => {
    const action = startCountChangerAC(10);
    const finalState = customizableCounterReducer(initState, action)
    const endCount = finalState.startCount

    expect(endCount).toBe(10)
})
test("the starting count should be increased by one", () => {
    initState.count = 0
    initState.maxCount = 2
    const action = incrementCountAC();
    const finalState = customizableCounterReducer(initState, action)
    const endCount = finalState.count

    expect(endCount).toBe(1)
})
test("the starting count should not be increased by one", () => {
    initState.count = 2
    initState.maxCount = 2
    const action = incrementCountAC();
    const finalState = customizableCounterReducer(initState, action)
    const endCount = finalState.count

    expect(endCount).toBe(2)
})
test("the count must be equal to the starting one", () => {
    initState.startCount = 3;
    initState.count = 10;
    const action = resetCounterAC();
    const finalState = customizableCounterReducer(initState, action)
    const endCount = finalState.count

    expect(endCount === initState.startCount).toBe(true)
})