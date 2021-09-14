import React, { useLayoutEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  List,
  Avatar,
  Input,
} from 'antd';
import LoadingSpinner from '../components/LoadingSpinner';
import { filteredUsersSelector, isLoadingUsersSelector } from '../selectors/users';
import { getUsers, filterUsersBy } from '../features/usersSlice';

const { Search } = Input;

const UsersView = () => {
  const dispatch = useDispatch();
  const loading = useSelector(isLoadingUsersSelector);
  const users = useSelector(filteredUsersSelector);

  useLayoutEffect(() => {
    dispatch(getUsers());
  }, []);

  const onChange = (ev) => {
    dispatch(filterUsersBy({ email: ev.target.value }));
  };

  const onSearch = (value) => {
    dispatch(filterUsersBy({ email: value }));
  };

  const usersCountFooterText = useMemo(() => `${users.length} users found`, [users]);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}
    >
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div style={{ width: '80vh', height: '60vh' }}>
          <List
            header={
              <Search placeholder="Type to search by email" onChange={onChange} onSearch={onSearch} enterButton />
            }
            footer={(
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                }}
              >
                {usersCountFooterText}
              </div>
            )}
            grid={{ column: 2 }}
            bordered
            dataSource={users}
            renderItem={({ avatar, email }) => (
              <List.Item style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '0px',
                marginBotton: '0px',
                paddingTop: '8px',
                paddingBottom: '8px',
              }}
              >
                <List.Item.Meta
                  style={{ alignItems: 'center' }}
                  avatar={<Avatar src={avatar} />}
                  title={email}
                />
              </List.Item>
            )}
          />
        </div>
      )}
    </div>
  );
};

export default UsersView;
