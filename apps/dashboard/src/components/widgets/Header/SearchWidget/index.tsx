/* eslint-disable @typescript-eslint/no-unused-vars */

import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';

import { SearchContainer, SearchIconWrapper, SearchInput } from "./index.style";

export default function SearchWidget() {
  /** Context */

  const navigate = useNavigate();

  /** States */

  const [query, setQuery] = useState<string>('');
  const [result, setResult] = useState<any[]>([]);
  const [isFetch, setIsFetch] = useState<boolean>(false);

  /** Handlers */

  const fetchResults = async () => {
    // const [
    //   catalogeRes,
    //   categoryRes,
    //   productRes
    // ] = await Promise.all([
    //   fetch(`http://localhost:3030/api/shop/cataloge?search=${query}`, { method: 'GET' }),
    //   fetch(`http://localhost:3030/api/shop/category?search=${query}`, { method: 'GET' }),
    //   fetch(`http://localhost:3030/api/shop/product?search=${query}`, { method: 'GET' })
    // ]);

    // const [
    //   cataloges,
    //   categories,
    //   products
    // ] = await Promise.all([
    //   catalogeRes.json(),
    //   categoryRes.json(),
    //   productRes.json(),
    // ])

    // setResult([
    //   ...cataloges.map((_: CatalogeType) => ({
    //     type: 'Cataloge', label: `#${_.id} ${_.title} - ${_.slug}`, url: `/products/cataloges/update/${_.id}`
    //   })),
    //   ...categories.map((_: CategoryType) => ({
    //     type: 'Category', label: `#${_.id} ${_.title} - ${_.slug}`, url: `/products/categories/update/${_.id}`
    //   })),
    //   ...products.map((_: ProductType) => ({
    //     type: 'Product', label: `#${_.id} ${_.article} ${_.title} - ${_.slug}`, url: `/products/update/${_.id}`
    //   })),
    // ]);
    setIsFetch(true);
  }

  /** Callbacks */

  const fetchCallback = useCallback(fetchResults, [fetchResults]);

  /** Effects */

  useEffect(() => {
    if (!query.trim()) return;

    if (isFetch) return;

    fetchCallback();
  }, [query, isFetch, fetchCallback])

  /** Render */

  return (
    <>
      <SearchContainer>
        <SearchIconWrapper>
          <SearchIcon color='action' />
        </SearchIconWrapper>
        <SearchInput
          groupBy={(option: any) => option.type}
          getOptionLabel={(option: any) => option.label}
          options={result.map((option) => option)}
          onChange={(event, newValue) => {            
            if (newValue !== undefined && newValue !== null) {
              const value = newValue as any;
              
              if (value.url) {
                navigate(value.url, { });
              }
            }
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              variant='outlined'
              value={query}
              onChange={(evt) => {
                setQuery(evt.target.value);
                setIsFetch(false);
              }}
              placeholder="Search..."
              slotProps={{
                input: {
                  ...params.InputProps,
                },
              }}
            />
          )}
          sx={{
            width: '100%'
          }}
        />
      </SearchContainer>
    </>
  )
}