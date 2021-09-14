import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, Avatar } from 'antd';
import { isLoadingUsersSelector, usersSelector } from '../selectors/users';
import { getUsers } from '../features/usersSlice';

const UsersView = () => {
  const dispatch = useDispatch();
  const loading = useSelector(isLoadingUsersSelector);
  console.log(loading);
  const users = useSelector(usersSelector);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      <List
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={users}
        renderItem={({ avatar, email }) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={avatar} />}
              title={email}
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default UsersView;
