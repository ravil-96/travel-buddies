import markersReducer from "./markersSlice";

describe("markersReducer", () => {
  test("it intialises with an empty array", () => {
    const initReturn = markersReducer(undefined, { type: "@@INIT" });
    expect(initReturn).toEqual([]);
  });

  test("it loads data as an array of markers", () => {
    const markerData = [
      { title: "m1", desc: "d1", id: 1, position_lat: 1.5, position_long: 1.5 },
      { title: "m2", desc: "d2", id: 2, position_lat: 2.5, position_long: 1.5 },
      { title: "m3", desc: "d3", id: 3, position_lat: 3.5, position_long: 1.5 },
    ];
    const fakeLoadMarkers = markersReducer([], {
      type: "LOAD_MARKERS",
      payload: markerData,
    });
    expect(fakeLoadMarkers).toHaveLength(3);
    expect(fakeLoadMarkers[2]).toEqual({
      desc: "d3",
      id: 3,
      position: [3.5, 1.5],
      title: "m3",
    });
  });

  test("it adds a new marker to array", () => {
    const markerData = { title: "m2", desc: "d2", id: 2, location: [1.5, 1.5] };
    const fakeAddMarker = markersReducer(
      [{ desc: "d1", id: 1, position: [0.5, 1.5], title: "m1" }],
      { type: "ADD_MARKER", payload: markerData }
    );
    expect(fakeAddMarker).toHaveLength(2);
    expect(fakeAddMarker[1]).toEqual({
      desc: "d2",
      id: 2,
      position: [1.5, 1.5],
      title: "m2",
    });
  });

  test("it deletes a marker from array by id", () => {
    const fakeAddMarker = markersReducer(
      [
        { desc: "d1", id: 1, position: [0.5, 1.5], title: "m1" },
        { desc: "d2", id: 2, position: [0.5, 1.5], title: "m2" },
      ],
      { type: "DELETE_MARKER", payload: 1 }
    );
    expect(fakeAddMarker).toHaveLength(1);
    expect(fakeAddMarker[0]).toEqual({
      desc: "d2",
      id: 2,
      position: [0.5, 1.5],
      title: "m2",
    });
  });

//   test("selects marker based on id", () => {
//     const initialState = [
//       {
//         id: 0,
//         long: "-73.985664",
//         lat: "40.748441",
//         name: "Empire State Building",
//         comment: "Hey! I wanna be here next year!",
//         username: "Beth",
//       },
//     ];
//     const action = { type: "markers/markerSelected", payload: 0 };
//     const result = markersReducer(initialState, action);
//     expect(result[0].name).toMatch("Empire State Building");
//   });

  test('it returns an empty array on reset', () => {
    const fakeClear = markersReducer(
        { desc: "d1", id: 1, position: [0.5, 1.5], title: "m1" },
        { type: 'CLEAR_MARKERS' }
        )
    expect(fakeClear).toEqual([])
})


});
