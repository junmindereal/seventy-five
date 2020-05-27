import React from 'react';
import Modal from 'react-modal';
import Button from '../common/Button';
import Input from '../common/Input';
import {UpdateModalProps} from '../../types';
import {modal} from '../../styles/modal';
import {form} from '../../styles/form';
import {btn} from '../../styles/btn';
import {Icon} from '@iconify/react';
import multiplyIcon from '@iconify/icons-uil/multiply';

const UpdateModal: React.FC<UpdateModalProps> = ({
  modalIsOpen,
  closeModal,
  lastName,
  firstName,
}) => {
  const handleReset = (): void => {
    console.log('Reset');
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      closeTimeoutMS={150}
      className={`${modal.modal} ${modal.modalUpdate}`}
      ariaHideApp={false}
    >
      <div className={modal.container}>
        <header className={modal.header}>
          <h2 className={modal.heading}>{`${lastName}, ${firstName}`}</h2>
          <Button
            className={modal.close}
            onClick={closeModal}
            label={<Icon icon={multiplyIcon} />}
          />
        </header>
        <form>
          <div className={form.col}>
            <div className={form.row}>
              <h2 className={form.rowTitle}>1st Quarter</h2>
              <Input
                error="invalid number"
                name="qtr1-q1"
                label="Quiz 1"
                onChange={(): void => {
                  return undefined;
                }}
                placeholder="0"
                type="number"
                step="any"
              />
              <Input
                error="invalid number"
                name="qtr1-q2"
                label="Quiz 2"
                onChange={(): void => {
                  return undefined;
                }}
                placeholder="0"
                type="number"
                step="any"
              />
              <Input
                error="invalid number"
                name="qtr1-q3"
                label="Quiz 3"
                onChange={(): void => {
                  return undefined;
                }}
                placeholder="0"
                type="number"
                step="any"
              />
              <Input
                error="invalid number"
                name="qtr1-q4"
                label="Quiz 4"
                onChange={(): void => {
                  return undefined;
                }}
                placeholder="0"
                type="number"
                step="any"
              />
              <Button
                className={`${btn.primary}`}
                label="Add Quiz"
                onClick={(): void => {
                  return undefined;
                }}
              />
            </div>
            <div className={form.rowSeparator}></div>
            <div className={form.row}>
              <h2 className={form.rowTitle}>2nd Quarter</h2>
              <Input
                error="invalid number"
                name="qtr1-q1"
                label="Quiz 1"
                onChange={(): void => {
                  return undefined;
                }}
                placeholder="0"
                type="number"
                step="any"
              />
              <Input
                error="invalid number"
                name="qtr1-q2"
                label="Quiz 2"
                onChange={(): void => {
                  return undefined;
                }}
                placeholder="0"
                type="number"
                step="any"
              />
              <Input
                error="invalid number"
                name="qtr1-q3"
                label="Quiz 3"
                onChange={(): void => {
                  return undefined;
                }}
                placeholder="0"
                type="number"
                step="any"
              />
              <Input
                error="invalid number"
                name="qtr1-q4"
                label="Quiz 4"
                onChange={(): void => {
                  return undefined;
                }}
                placeholder="0"
                type="number"
                step="any"
              />
              <Button
                className={`${btn.primary}`}
                label="Add Quiz"
                onClick={(): void => {
                  return undefined;
                }}
              />
            </div>
            <div className={form.rowSeparator}></div>
            <div className={form.row}>
              <h2 className={form.rowTitle}>3rd Quarter</h2>
              <Input
                error="invalid number"
                name="qtr1-q1"
                label="Quiz 1"
                onChange={(): void => {
                  return undefined;
                }}
                placeholder="0"
                type="number"
                step="any"
              />
              <Input
                error="invalid number"
                name="qtr1-q2"
                label="Quiz 2"
                onChange={(): void => {
                  return undefined;
                }}
                placeholder="0"
                type="number"
                step="any"
              />
              <Input
                error="invalid number"
                name="qtr1-q3"
                label="Quiz 3"
                onChange={(): void => {
                  return undefined;
                }}
                placeholder="0"
                type="number"
                step="any"
              />
              <Input
                error="invalid number"
                name="qtr1-q4"
                label="Quiz 4"
                onChange={(): void => {
                  return undefined;
                }}
                placeholder="0"
                type="number"
                step="any"
              />
              <Button
                className={`${btn.primary}`}
                label="Add Quiz"
                onClick={(): void => {
                  return undefined;
                }}
              />
            </div>
            <div className={form.rowSeparator}></div>
            <div className={form.row}>
              <h2 className={form.rowTitle}>3rd Quarter</h2>
              <Input
                error="invalid number"
                name="qtr1-q1"
                label="Quiz 1"
                onChange={(): void => {
                  return undefined;
                }}
                placeholder="0"
                type="number"
                step="any"
              />
              <Input
                error="invalid number"
                name="qtr1-q2"
                label="Quiz 2"
                onChange={(): void => {
                  return undefined;
                }}
                placeholder="0"
                type="number"
                step="any"
              />
              <Input
                error="invalid number"
                name="qtr1-q3"
                label="Quiz 3"
                onChange={(): void => {
                  return undefined;
                }}
                placeholder="0"
                type="number"
                step="any"
              />
              <Input
                error="invalid number"
                name="qtr1-q4"
                label="Quiz 4"
                onChange={(): void => {
                  return undefined;
                }}
                placeholder="0"
                type="number"
                step="any"
              />
              <Button
                className={`${btn.primary}`}
                label="Add Quiz"
                onClick={(): void => {
                  return undefined;
                }}
              />
            </div>
          </div>
          <div className={form.action}>
            <Button
              className={`${btn.secondary} ${btn.reset}`}
              label="Reset"
              onClick={handleReset}
            />
            <Button
              className={btn.tertiary}
              label="Cancel"
              onClick={closeModal}
            />
            <Button
              className={`${btn.primary} ${form.submit}`}
              label="Save and Update"
              type="submit"
            />
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default UpdateModal;
