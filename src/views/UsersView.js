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

  const usersCountFooterText = useMemo(() => `${users ? users.length : 0} users found`, [users]);

  const headerList = useMemo(() => (
    <Search
      placeholder="Type to search by email"
      onChange={onChange}
      onSearch={onSearch}
      enterButton
    />
  ), [onChange, onSearch]);

  const footerList = useMemo(() => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}
    >
      {usersCountFooterText}
    </div>
  ), [usersCountFooterText]);

  const renderItem = ({ avatar, email }) => (
    <List.Item style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: '16px',
      paddingBottom: '16px',
      marginBottom: 0,
    }}
    >
      <List.Item.Meta
        style={{ alignItems: 'center' }}
        avatar={<Avatar src={avatar} />}
        title={email}
      />
    </List.Item>
  );

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
        <div style={{ width: '80vw', height: '60vh' }}>
          <List
            header={headerList}
            footer={footerList}
            grid={{ column: 2 }}
            bordered
            dataSource={users}
            renderItem={renderItem}
          />
        </div>
      )}
    </div>
  );
};

export default UsersView;
