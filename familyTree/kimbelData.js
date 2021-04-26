data = {
    "start":"id1",
    "persons": {
        "id1": { "id": "id1", "name": "Jason", "birthyear": 1111, "own_unions": ["u1"], "birthplace":"Illinois"},
        "id2": { "id": "id2", "name": "Jessica", "birthyear": 1111, "own_unions": ["u1"], "birthplace":"Guam"},
        "id3": { "id": "id3", "name": "Jared", "birthyear": 1111, "own_unions": [""], "parent_union": "u1", "birthplace":"Colorado"},
        "id4": { "id": "id4", "name": "Colbey", "birthyear": 1111, "own_unions": [""], "parent_union": "u1", "birthplace":"Nevada"},
        "id5": { "id": "id5", "name": "Lacey", "birthyear": 1111, "own_unions": [""], "parent_union": "u1", "birthplace":"Nevada"},
    },
    "unions": {
        "u1": { "id": "u1", "partner": ["id1", "id2"], "children": ["id3", "id4", "id5"] },
    },
    "links": [
        ["id1", "u1"],
        ["id2", "u1"],
        ["u1", "id3"],
        ["u1", "id4"],
        ["u1", "id5"],
    ]
}
