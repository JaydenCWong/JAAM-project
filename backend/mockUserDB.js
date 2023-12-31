// Mock database.js file
//const { MongoClient, ObjectId } = require('mongodb');
const mockUser = [
	{
		_id: 5,
		email: 'test@example.com',
		deviceToken: 'initialDeviceToken',
		UUID: 'initialUUID',
		defaultLat: 40.75,
		defaultLon: -74.0,
		FriendsList: []
	},
	{
		_id: 6,
		email: 'another@example.com',
		deviceToken: 'initialDeviceToken2',
		UUID: 'initialUUID2',
		defaultLat: 37.77,
		defaultLon: -122.42,
		FriendsList: [],
	},
	{
		_id: 7,
		email: 'yetanother@example.com',
		deviceToken: 'initialDeviceToken3',
		UUID: 'initialUUID3',
		defaultLat: 34.05,
		defaultLon: -118.24,
		FriendsList: []
	},
];

const mockDb = {
	userDB: {
		userInfo: [mockUser],
	},
};

const mockClient = {
	db: (dbName) => mockDb[dbName],
};

async function connectToDatabase() {
  //console.log('Connecting mock database connection')
	try {
		console.log('Connected to Mock MongoDB');
	} catch (error) {
		console.error('Error connecting to the database: ', error);
		throw error;
	}
}

async function closeDatabaseConnection() {
	try {
		console.log('Closed Mock MongoDB connection');
	} catch (error) {
		console.error('Error closing the database connection: ', error);
		throw error;
	}
}

async function getUserInfoByEmail(email) {
  //console.log('Retrieving user info from email')
	try {
		const user = mockDb.userDB.userInfo.find((user) => user.email === email);
		return user;
	} catch (error) {
		console.error('Error getting user information: ', error);
		throw error;
	}
}

async function updateUserByEmail(email, updateData) {
	try {
		const userIndex = mockDb.userDB.userInfo.findIndex((user) => user.email === email);
		var count;
		if (userIndex !== -1) {
			if (updateData.FriendsList) {
				const newFriends = Array.isArray(updateData.FriendsList)
					? updateData.FriendsList
					: [updateData.FriendsList];

				// Check if the friend is already in the FriendsList
				if (!newFriends.every((friend) => mockDb.userDB.userInfo[userIndex].FriendsList.includes(friend))) {
					console.log("Friend already added to the user's FriendsList.");
					count = {modifiedCount: 0};
					return count;
				}

				mockDb.userDB.userInfo[userIndex].FriendsList = [
	...new Set([...mockDb.userDB.userInfo[userIndex].FriendsList, ...newFriends]),
				];
				count = {modifiedCount: 1};
				return count;
			}
			count = {modifiedCount: 0};
			return count;

		} else {
			console.warn(`User with email '${email}' not found in updateUserByEmail`);
			count = {modifiedCount: 0};
			return count;
		}
	} catch (error) {
		console.error('Error updating user information: ', error);
		throw error;
	}
}

// async function updateUserByEmail(email, updateData) {
	//     try {
		//       const userIndex = mockDb.userDB.userInfo.findIndex((user) => user.email === email);

		//       if (userIndex !== -1) {
			//         // Manually add friend to FriendsList
			//         if (updateData.FriendsList) {
				//           const newFriends = Array.isArray(updateData.FriendsList)
				//             ? updateData.FriendsList
				//             : [updateData.FriendsList];

				//           mockDb.userDB.userInfo[userIndex].FriendsList = [
					//             ...new Set([...mockDb.userDB.userInfo[userIndex].FriendsList, ...newFriends]),
					//           ];
				//           return { modifiedCount: 1 };
				//         }

			//         return { modifiedCount: 0 };
			//       } else {
				//         console.warn(`User with email '${email}' not found in updateUserByEmail`);
				//         return { modifiedCount: 0 };
				//       }
		//     } catch (error) {
			//       console.error('Error updating user information: ', error);
			//       throw error;
			//     }
	//   }


// async function updateUserByEmail(email, updateData) {
	//     try {
		//         const userIndex = mockDb.userDB.userInfo.findIndex((user) => user.email === email);

		//         if (userIndex !== -1) {
			//           // Manually add friend to FriendsList
			//           if (updateData.$addToSet && updateData.$addToSet.FriendsList) {
				//             const newFriends = Array.isArray(updateData.$addToSet.FriendsList)
				//               ? updateData.$addToSet.FriendsList
				//               : [updateData.$addToSet.FriendsList];

				//             mockDb.userDB.userInfo[userIndex].FriendsList = [
					//               ...new Set([...mockDb.userDB.userInfo[userIndex].FriendsList, ...newFriends]),
					//             ];
				//           }

			//           return { modifiedCount: 1 };
			//         } else {
				//           console.warn(`User with email '${email}' not found in updateUserByEmail`);
				//           return { modifiedCount: 0 };
				//         }
		//       } catch (error) {
			//         console.error('Error updating user information: ', error);
			//         throw error;
			//       }
	//     }
//   try {
	//     // const userIndex = mockDb.userDB.userInfo.findIndex((user) => user.email === email);
	//     // if (userIndex !== -1) {
		//     //   mockDb.userDB.userInfo[userIndex] = { ...mockDb.userDB.userInfo[userIndex], ...updateData };
		//     //   return { modifiedCount: 1 };
		//     const userIndex = mockDb.userDB.userInfo.findIndex((user) => user.email === email);

		//     if (userIndex !== -1) {
			//       // Manually add friend to FriendsList
			//       if (updateData.$addToSet && updateData.$addToSet.FriendsList) {
				//         const newFriends = Array.isArray(updateData.$addToSet.FriendsList)
				//           ? updateData.$addToSet.FriendsList
				//           : [updateData.$addToSet.FriendsList];

				//         mockDb.userDB.userInfo[userIndex].FriendsList = [
					//           ...new Set([...mockDb.userDB.userInfo[userIndex].FriendsList, ...newFriends]),
					//         ];
				//       }

			//       return { modifiedCount: 1 };
			//     } else {
				//       return { modifiedCount: 0 };
				//     }
		//   } catch (error) {
			//     console.error('Error updating user information: ', error);
			//     throw error;
			//   }
	//}

let userIdCounter = 1;

async function insertUser(userData) {
  //console.log('Inserting user to the mock database')
	try {
		const newUser = { _id: userIdCounter++, ...userData };
		mockDb.userDB.userInfo.push(newUser);
		var id = {insertedId: newUser._id};
		return id;
	} catch (error) {
		console.error('Error inserting user information: ', error);
		throw error;
	}
}

async function getUserDetails(userIdentifier) {
  //console.log('Retrieving user information')
	try {
		const user = await getUserInfoByEmail(userIdentifier);

		if (user) {
			var userTemp = {email: user.email,
				fcmToken: user.deviceToken};
			return userTemp;
		} else {
			console.log("User not found");
			return null; // User not found
		}
	} catch (error) {
		console.error('Error retrieving user details:', error);
		return null; // Handle the error appropriately in your application
	}
}


const getChatHistory = async ({ senderEmail, receiverEmail }) => {
  //console.log('Retrieving chat history')
	try {
		// Create a mock chat history
		const mockChatHistory = [
			{
				_id: '1',
				text: 'Mock message 1',
				senderEmail,
				receiverEmail,
				timestamp: new Date('2023-11-15T12:00:00Z'),
			},
			{
				_id: '2',
				text: 'Mock message 1',
				senderEmail,
				receiverEmail,
				timestamp: new Date('2023-11-15T12:00:00Z'),
			},
			{
				_id: '3',
				text: 'Mock message 1',
				senderEmail,
				receiverEmail,
				timestamp: new Date('2023-11-15T12:00:00Z'),
			},
			{
				_id: '4',
				text: 'Mock message 1',
				senderEmail,
				receiverEmail,
				timestamp: new Date('2023-11-15T12:00:00Z'),
			},
			// Add more mock messages as needed
		];

		// Mock the .sort({ timestamp: -1 }) and .limit(10) operations
		const sortedChatHistory = mockChatHistory
			.sort((a, b) => b.timestamp - a.timestamp)
			.slice(0, 3);

		const reversedChatHistory = sortedChatHistory.reverse();

		return reversedChatHistory;
	} catch (error) {
		console.error(error);
		throw new Error('Chat history could not be retrieved');
	}
};

const getRoute = async ({defaultLat, defaultLong, latitude, longitude, startTime}) => {
  //console.log('Getting route information')
	try {
		// Mock route data
		const mockRouteData = [
			{
				Start: {
					Stop: "Northbound King George Blvd @ 60 Ave",
					Lat: "49.112374",
					Long: "-122.840708",
					Time: "06:31:46",
					Bus: "321 Scott Rd Station",
				},
				End: {
					Stop: "Surrey Central Station @ Bay 14",
					Lat: "49.189133",
					Long: "-122.847582",
					Time: "06:57:00",
					Bus: "321 Scott Rd Station",
				},
			},
			{
				Start: {
					Stop: "Surrey Central Station @ Bay 14",
					Lat: "49.189133",
					Long: "-122.847582",
					Time: "07:02:00",
					Bus: "314 Sunbury"
				},
				End: {
					Stop: "Southbound Scott Rd @ 90 Ave",
					Lat: "49.166456",
					Long: "-122.890487",
					Time: "07:19:58",
					Bus: "314 Sunbury"
				}
			},
			// Add more route data as needed
		];

		return mockRouteData;
	} catch (error) {
		console.error(error);
		throw new Error('Route data could not be retrieved');
	}
};


module.exports = {
	connectToDatabase,
	closeDatabaseConnection,
	getUserInfoByEmail,
	updateUserByEmail,
	insertUser,
	getUserDetails,
	getChatHistory,
	getRoute,
	mockClient, // Exporting mock client for testing purposes
};
