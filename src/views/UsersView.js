import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  List,
  Avatar,
  Input,
} from 'antd';
import LoadingSpinner from '../components/LoadingSpinner';
import { filteredUsersSelector, isLoadingUsersSelector, usersSelector } from '../selectors/users';
import { getUsers, filterUsersBy } from '../features/usersSlice';

const { Search } = Input;

const UsersView = () => {
  const dispatch = useDispatch();
  const loading = useSelector(isLoadingUsersSelector);
  const users = useSelector(filteredUsersSelector);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const onChange = (ev) => {
    dispatch(filterUsersBy({ email: ev.target.value }));
  };

  const onSearch = (value) => {
    dispatch(filterUsersBy({ email: value }));
  };

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <List
          header={
            <Search placeholder="Type to search by email" onChange={onChange} onSearch={onSearch} enterButton />
          }
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
      )}
    </>
  );
};

export default UsersView;
