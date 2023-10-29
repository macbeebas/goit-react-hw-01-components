// Component "Profile" files
import user from './profile/user'; // user.json
import Profile from './profile/profile'; // profile.js

// Component "Statistics" files
import data from './statistics/data'; // data.json
import Statistics from './statistics/statistics'; // statistics.js

// Component "FriendList" files
import friends from './friendlist/friends'; // friends.json
import FriendList from './friendlist/friendlist'; // friendlist.js

// Component "Statistics" files
import transactions from './transactionhistory/transactions';
import TransactionHistory from './transactionhistory/transactionhistory';
<img
  src="./src/components/transactionhistory/transactions-sample.jpg"
  alt=""
/>;
export const App = () => {
  return (
    <>
      <div className="container">
        <ul className="components-list">
          <li>
            <h1 className="components-header">goit-react-hw-01-components</h1>
          </li>
          <li className="componenets-item">
            <h2 className="components-subheader">Component "Profile"</h2>
            <div className="components-item-box">
              <Profile
                username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
              />
            </div>
          </li>
          <li className="componenets-item">
            <div className="components-item-box">
              <h2 className="components-subheader">Component "Statistics"</h2>
              <Statistics title="Upload stats" stats={data} />
              <Statistics stats={data} />
            </div>
          </li>
          <li className="componenets-item">
            <div className="components-item-box">
              <h2 className="components-subheader">Component "FriendList"</h2>
              <FriendList friends={friends} />
            </div>
          </li>
          <li className="componenets-item">
            <div className="components-item-box">
              <h2 className="components-subheader">
                Component "TransactionHistory"
              </h2>
              <TransactionHistory transactions={transactions} />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
