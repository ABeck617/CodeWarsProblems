// 8 kyu Grasshopper - Personalized Message

// Create a function that gives a personalized greeting. This fuction takes
// two parameters: name and owner

// Use contditionals to return the proper message:
// 
// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

function greet (name, owner) {
    // Add code here
    if (name === owner) {
      return 'Hello boss'
    } else {
      return 'Hello guest'
    }
  }
  