abstract class ChatRoomMediator {
  abstract showMessage(user: User, message: string);
}

class ChatRoom extends ChatRoomMediator {
  showMessage(user: User, message: string) {
    const time = new Date().toLocaleDateString();
  }
}

class User {
  name: string;
  room: ChatRoom;

  constructor(name: string) {
    this.name = name;
  }

  joinChatRoom(room: ChatRoom) {
    this.room = room;
  }

  send(message: string) {
    if (this.room) {
      this.room.showMessage(message);
    }
  }
}

(function() {
  const room = new ChatRoom();

  const zhi = new User('zhi');
  const ni = new User('ni');

  zhi.joinChatRoom(room);
  ni.joinChatRoom(room);

  zhi.send('In the world !');
  ni.send('What ?!');
})();
