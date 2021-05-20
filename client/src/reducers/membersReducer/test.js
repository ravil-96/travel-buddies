import membersReducer from ".";

describe("markersReducer", () => {
const initState = {"creator": {}, "members": [], "currentMembers": []}
const stateB = {"creator": {"id": 1, "username": "creator"}, "currentMembers": [], "members": [{"id": 2, "username": "user1"}]}
  test("it intialises with an object to contain members data", () => {
    const initReturn = membersReducer(undefined, { type: "@@INIT" });
    expect(initReturn).toEqual(initState);
  });

  test("it loads creator and members data on load", () => {
    const testLoadMembers = membersReducer(initState, { type: "LOAD_MEMBERS",
    payload: {creator: {username: 'creator', id:1}, users: [{username: 'user1', id:2}] }});
    expect(testLoadMembers).toEqual(stateB);
});
test("it adds a new member to members array", () => {
    const testAddMember = membersReducer(stateB, { type: "ADD_MEMBER",
    payload: 'user2'})
    expect(testAddMember.members[1]).toEqual({'username': 'user2'});
    expect(testAddMember.members).toHaveLength(2)
  });

  test("it adds current members to the object", () => {
    const testAddMember = membersReducer(stateB, { type: "CURRENT_MEMBERS",
    payload: [{username: 'user1'}]})
    expect(testAddMember.currentMembers[0]).toEqual({'username': 'user1'});
  });

  test('it returns the initial object on reset', () => {
    const fakeClear = membersReducer(
        stateB,
        { type: 'CLEAR_MEMBERS' }
        )
    expect(fakeClear).toEqual(initState)
})


});
