import { IconButton, InputAdornment, TextField } from '@mui/material';
import { debounce } from 'lodash';
import { useContext, useRef } from 'react';
import { Context } from '../../lib/Context';
import SearchIcon from '@mui/icons-material/Search';

export const Search = () => {
  const { setPhrase } = useContext(Context);
  const delayedSearch = useRef(
    debounce((value: string) => {
      setPhrase(value);
    }, 300),
  ).current;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    delayedSearch((e.target satisfies HTMLInputElement).value);
  };
  return (
    <TextField
      label="Search"
      type="search"
      variant="standard"
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
