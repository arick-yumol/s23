// Create a single room
/*

=====================================================================
db.rooms.insertOne(
	{
		"name": "single",
		"accomodates": 2,
		"price": 1000,
		"description": "A simple room with all the basic necessities"
	}
);
=====================================================================


=====================================================================
db.rooms.updateOne(
    {
        "_id": ObjectId("6136040aeca28b7ee0a1bf66")
    },
    {
        $set: {
            "rooms_available": 10,
            "isAvailable": false
        }
    }
);
=====================================================================


=====================================================================
db.rooms.insertMany([
	{
		"name": "queen",
		"accomodates": 4,
		"price": 4000,
		"description": "A room with a queen sized bed perfect for a simple getaway",
		"rooms_available": 15,
		"isAvailable": false
	},
	{
        "name": "double",
        "accomodates": 3,
        "price": 2000,
        "description": "A room fit for a small family going on a vacation",
        "rooms_available": 5,
        "isAvailable": false
    }
]);
=====================================================================


=====================================================================
db.rooms.find({ "name": "double" });
=====================================================================


=====================================================================
db.rooms.updateOne(
	{
		"_id": ObjectId("6136057aeca28b7ee0a1bf67")
	},
	{
		$set: {
			"rooms_available": 0
		}
	}
);
=====================================================================


=====================================================================
db.rooms.deleteMany({ "rooms_available": 0 });
=====================================================================
*/