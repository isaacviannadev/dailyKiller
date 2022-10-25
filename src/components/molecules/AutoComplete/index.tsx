/* eslint-disable @next/next/no-img-element */
import { User, UserMinus, UserPlus } from 'phosphor-react';
import React, { useState } from 'react';
import { isEmail, isGmail } from '../../../helpers/validation';
import { findUserByEmail } from '../../../services/firestore';
import Divider from '../../UI/DIvider';
import { Input } from '../../UI/Input';
import {
  AutoCompleteContainer,
  AutoCompleteItem,
  AutoCompleteResults,
  AutoCompleteSelectedItem,
  AutoCompleteSelectedList,
} from './style';

export type SelectedUser = {
  id: string;
  name: string;
  email: string;
};

interface AutoCompleteProps {
  onSelect: (option: SelectedUser) => void;
  onRemove: (option: SelectedUser) => void;
  selecteds: SelectedUser[];
}

export const AutoComplete = ({
  selecteds,
  onSelect,
  onRemove,
}: AutoCompleteProps) => {
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<any>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    let received: any = [];

    if (e.target.value) {
      if (isEmail(e.target.value) && isGmail(e.target.value)) {
        setIsOpen(true);

        findUserByEmail(e.target.value).then((users) => {
          const userFound = {
            email: e.target.value,
            name: users?.name,
            avatar: users?.avatar,
          };

          received.push(userFound);
          setOptions(received);
        });
      } else {
        setIsOpen(false);

        return;
      }
    } else {
      setOptions(received);
      setInputValue('');
      setIsOpen(false);
    }
  };

  const handleSelect = (option: SelectedUser) => {
    onSelect(option);
    setIsOpen(false);
  };

  const handleRemove = (option: SelectedUser) => {
    onRemove(option);
  };

  const avatars = ['morte', 'demonio', 'menina', 'ogro'];

  const shuffle = (array: any) => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  return (
    <AutoCompleteContainer>
      <Input
        value={inputValue}
        label='Adicionar membro'
        placeholder='Digite o email do membro'
        onChange={handleChange}
      />
      {selecteds && selecteds.length > 0 && (
        <AutoCompleteSelectedList>
          {selecteds.map((selected) => (
            <AutoCompleteSelectedItem
              key={selected.id}
              onClick={() => handleRemove(selected)}
            >
              <span className='email'>{selected.email}</span>

              <div className='action'>
                <span> Remover</span>
                <div className='remove'>
                  <UserMinus size={16} />
                </div>
              </div>
            </AutoCompleteSelectedItem>
          ))}
          <Divider />
        </AutoCompleteSelectedList>
      )}

      {isOpen && (
        <AutoCompleteResults>
          {inputValue &&
          isEmail(inputValue) &&
          isGmail(inputValue) &&
          options.length > 0
            ? options
                .filter((option: any) => option.email === inputValue)
                .map((option: any) => (
                  <AutoCompleteItem
                    key={option.id}
                    onClick={() => handleSelect(option)}
                  >
                    <div className='avatar'>
                      <div className='avatarImg'>
                        <User size={28} />
                      </div>
                      <div className='details'>
                        <span className='name'>{option.name}</span>
                        <span className='email'>{option.email}</span>
                      </div>
                    </div>

                    <div className='action'>
                      <span>Adicionar</span>
                      <div className='add'>
                        <UserPlus size={20} />
                      </div>
                    </div>
                  </AutoCompleteItem>
                ))
            : isEmail(inputValue) &&
              isGmail(inputValue) && (
                <AutoCompleteItem
                  onClick={() =>
                    handleSelect({ id: '', name: '', email: inputValue })
                  }
                >
                  <div className='avatar'>
                    <div className='avatarImg'>
                      <User size={28} />
                    </div>
                    <div className='details'>
                      <span className='name'>Convidar</span>
                      <span className='email'>{inputValue}</span>
                    </div>
                  </div>
                  <div className='action'>
                    <span>Adicionar</span>
                    <div className='add'>
                      <UserPlus size={20} />
                    </div>
                  </div>
                </AutoCompleteItem>
              )}
        </AutoCompleteResults>
      )}
    </AutoCompleteContainer>
  );
};
