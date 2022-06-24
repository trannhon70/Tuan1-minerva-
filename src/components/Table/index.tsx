import { FC, ReactNode } from "react";

import Muitable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export interface ITableHeader {
    key: string; 
    name?: ReactNode; 
}

export interface TableProps{
    header: ITableHeader[],
    data?: Record<string, string | number>[]
}

const Table: FC<TableProps> = (props) =>{
    const {header,data =[]} = props;     
    return (
        <Muitable>
            <TableHead>
                <TableRow>
                    {
                        header.map((h,i) =>{
                            return <TableCell key={i}>{h.name}</TableCell>
                        })
                    }
                    
                    
                </TableRow>
            </TableHead>
            {
                !!data.length && 
                <TableBody>
                    {
                        data.map((d,i) => {
                            return <TableRow key={i}>
                                {
                                    header.map((h,j) =>{
                                        return <TableCell key={j}>{d[h.key]}</TableCell>
                                    })
                                }
                            </TableRow>
                        })
                    }
                </TableBody>
            }
            
        </Muitable>
    )
}

export default Table ;