import todoReducer, {
    TodoState,
    addToList,
} from '../todo/todoSplice';




describe('todo reducer', () => {
    const initialState: TodoState = {
        value: [],
        filter
    };
    it('should handle increment', () => {
        const actual = todoReducer(initialState, addToList(['']));
        expect(actual.value).toEqual(['']);
    })


});
