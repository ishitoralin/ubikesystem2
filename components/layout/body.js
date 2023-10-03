import React, { useEffect, useState } from 'react'
import styles from '@/styles/ubike.module.css'
import { styled, alpha } from '@mui/material/styles'
import Image from 'next/image'

import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import Select from '@mui/material/Select'
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
export default function Body() {
  const [age, setAge] = React.useState('')
  const [data, setData] = useState([])
  const [cities, setCities] = useState([])
  console.log(cities)
  const handleChange = (event) => {
    setAge(event.target.value)
  }

  // search
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
    marginLeft: 0,
    width: 277,
    height: 40,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }))

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }))

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
    },
  }))

  const styleForSelect = {
    width: 175,
    height: 40,
    backgroundColor: '#F6F6F6',
    fontFamily: 'Noto Sans TC, sans-serif',
    fontSize: '18px',
    fontWeight: '500',
    textAlign: 'center',
    borderRadius: '8px',
    boxShadow: 'none',

    // 強制取消邊框顏色
    '.MuiOutlinedInput-notchedOutline': { border: 0 },

    // 強制取消focus邊框顏色
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      opacity: 0, //讓邊框變透明
      borderRadius: '8px',
    },
  }

  // form
  const styleForFormGourp = {
    fontFamily: 'Noto Sans TC, sans-serif',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '24px',
  }

  const styleForCheckBtn = {
    fontSize: '18px',
    fontFamily: 'Noto Sans TC, sans-serif',
    fontWeight: '400',
    lineHeight: '24px',
    color: '#323232',
  }

  const formControlLabel = {
    height: '40px',
    width: '99px',
    margin: 0,
    marginRight: '16px',
    marginBottom: '15px',
  }
  const url =
    'https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json'
  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        setData(data)

        const uniqueCities = [...new Set(data.map((item) => item.sarea))]
        setCities(uniqueCities)
      })
  }, [])

  return (
    <>
      <div className={styles.bodyContainer}>
        {/* title */}
        <div className={styles.bodyTitle}>站點資訊</div>
        {/* dropdown */}
        <div className={styles.searchPart}>
          {/* 搜尋區域下拉式選單 */}
          <Box
            sx={{
              outline: 'none', // 取消外框
              border: 0, // 取消邊框
              '&:focus': {
                outline: 'none', // 取消Focus時的藍色樣式
              },
            }}
          >
            <FormControl>
              <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                sx={styleForSelect}
              >
                <MenuItem value="">請選擇站點</MenuItem>
                {data.map((v, i) => {
                  return (
                    <MenuItem value={i + 1} key={i}>
                      {v.ar}
                    </MenuItem>
                  )
                })}
              </Select>
            </FormControl>
          </Box>
          {/* search bar */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" />
          </Search>
        </div>
        {/* checkgroup and photo */}
        <div className={styles.checkPart}>
          {/* left part for btn group */}
          <div>
            {/* check all */}
            <FormControlLabel
              control={<Checkbox />}
              label={
                <Box component="div" sx={styleForCheckBtn}>
                  全部勾選
                </Box>
              }
              sx={{
                height: '40px',
                width: '117px',
                margin: 0,
                marginBottom: '15px',
              }}
            />
            {/* btn group */}
            <div className={styles.buttonGroup}>
            {/* {cities.map(()=>{})} */}
              <FormGroup sx={styleForFormGourp}>
                <FormControlLabel
                  control={<Checkbox />}
                  label={
                    <Box component="div" sx={styleForCheckBtn}>
                      大安區
                    </Box>
                  }
                  sx={formControlLabel}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label={
                    <Box component="div" sx={styleForCheckBtn}>
                      大同區
                    </Box>
                  }
                  sx={formControlLabel}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label={
                    <Box component="div" sx={styleForCheckBtn}>
                      士林區
                    </Box>
                  }
                  sx={formControlLabel}
                />
              </FormGroup>
              <FormGroup sx={styleForFormGourp}>
                <FormControlLabel
                  control={<Checkbox />}
                  label={
                    <Box component="div" sx={styleForCheckBtn}>
                      文山區
                    </Box>
                  }
                  sx={formControlLabel}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label={
                    <Box component="div" sx={styleForCheckBtn}>
                      中正區
                    </Box>
                  }
                  sx={formControlLabel}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label={
                    <Box component="div" sx={styleForCheckBtn}>
                      中山區
                    </Box>
                  }
                  sx={formControlLabel}
                />
              </FormGroup>
              <FormGroup sx={styleForFormGourp}>
                <FormControlLabel
                  control={<Checkbox />}
                  label={
                    <Box component="div" sx={styleForCheckBtn}>
                      內湖區
                    </Box>
                  }
                  sx={formControlLabel}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label={
                    <Box component="div" sx={styleForCheckBtn}>
                      北投區
                    </Box>
                  }
                  sx={formControlLabel}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label={
                    <Box component="div" sx={styleForCheckBtn}>
                      松山區
                    </Box>
                  }
                  sx={formControlLabel}
                />
              </FormGroup>
              <FormGroup sx={styleForFormGourp}>
                <FormControlLabel
                  control={<Checkbox />}
                  label={
                    <Box component="div" sx={styleForCheckBtn}>
                      南港區
                    </Box>
                  }
                  sx={formControlLabel}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label={
                    <Box component="div" sx={styleForCheckBtn}>
                      萬華區
                    </Box>
                  }
                  sx={formControlLabel}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label={
                    <Box component="div" sx={styleForCheckBtn}>
                      信義區
                    </Box>
                  }
                  sx={formControlLabel}
                />
              </FormGroup>
            </div>
          </div>
          {/* right part for photo */}
          <div className={styles.photoContainer}>
            <Image
              src="/Frame.png"
              alt="Ubike Logo"
              width="502"
              height="172"
            ></Image>
          </div>
        </div>
        {/* table */}
        <div className={styles.tableContainer}>
          <div className={styles.tableHead}>
            <div>縣市</div>
            <div>區域</div>
            <div>站點資訊</div>
            <div>可借車輛</div>
            <div>可還空位</div>
          </div>
          <div className={styles.tableBodyOdd}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
          </div>
          <div className={styles.tableBodyEven}>
            <div>1</div>
            <div>23</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
          </div>
          <div className={styles.tableBodyOdd}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
          </div>
          <div className={styles.tableBodyEven}>
            <div>1</div>
            <div>23</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
          </div>
          <div className={styles.tableBodyOdd}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
          </div>
          <div className={styles.tableBodyEven}>
            <div>1</div>
            <div>23</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
          </div>
        </div>
      </div>
    </>
  )
}
