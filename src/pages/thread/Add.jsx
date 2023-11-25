import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ThreadInput from '../../components/thread/ThreadInput';
import { asyncAddThread } from '../../states/threads/action';

function Add() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddThread = ({ title, body, category }) => {
    dispatch(asyncAddThread({ title, body, category }));
    navigate('/');
  };

  return (
    <section className="home-page">
      <h2>Buat Diskusi Baru</h2>
      <ThreadInput
        addThread={onAddThread}
      />
    </section>
  );
}

export default Add;
