// 객체 정의
function Users() { 
  this.users = ["지수", "서희", "커비"]
} 

// 유저 정보를 추가
Users.prototype.add = function(name, callback) {
  let self = this;
  this.users.push(name);
} 
Users.prototype.remove = function(name, callback) {
  let self = this;
  this.users = this.users.filter(user => user !== name);
}

function UsersProxy() {
  let users = new Users();
  let count = 0;
  return {
    add: function(name, callback) {
      users.add(name);
      count = count + 1;
    },
    remove: function(name, callback) {
      users.remove(name);
      count = count + 1;
    },
    getUsers: function() { 
      return users;
    },
    getCount: function() {
      return count;
    }
  }
}