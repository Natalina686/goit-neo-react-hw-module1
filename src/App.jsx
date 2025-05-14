import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

import friends from "./data/friends.json";
import user from "./data/user.json";
import transactons from "./data/transactions.json";


function App() {
  return (
    <>
      <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      image={user.avatar}
      stats={user.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactons} />
    </>
  );
};

export default App;