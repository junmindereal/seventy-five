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
  quarters,
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
            {quarters.map((quarter, index) => (
              <React.Fragment key={index}>
                <div className={form.row}>
                  <h2 className={form.rowTitle}>{quarter.name}</h2>
                  {quarter.quizzes.map((quiz, index) => (
                    <Input
                      value={quiz}
                      error="invalid number"
                      name={`${quarter.name}-quiz-${index}`}
                      label={`Quiz ${index + 1}`}
                      onChange={(): void => {
                        return undefined;
                      }}
                      placeholder="0"
                      type="number"
                      step="any"
                      key={index}
                    />
                  ))}
                  <Button
                    className={`${btn.primary}`}
                    label="Add Quiz"
                    onClick={(): void => {
                      return undefined;
                    }}
                  />
                </div>
                <div className={form.rowSeparator}></div>
              </React.Fragment>
            ))}
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
