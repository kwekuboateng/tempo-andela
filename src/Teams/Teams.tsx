import React, { useMemo } from "react";
import DataTable from "react-data-table-component";
import { getAllTeams } from "../Api/Api";
import { TextField, ClearButton } from "../Shared/Styles";
import { Link } from "react-router-dom";



interface IRow {
  id: string;
  name: string;
}

interface ITeamsObj {
  id: string;
  name: string;
}

interface FilterProps {
  filterText: string;
  onFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
}

const FilterComponent = ({ filterText, onFilter, onClear }: FilterProps) => (
  <>
    <TextField
      id="search"
      type="text"
      placeholder="Filter By Name"
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
    />
    <ClearButton type="button" onClick={onClear}>
      X
    </ClearButton>
  </>
);

export default function Teams() {
  const [data, setData] = React.useState<ITeamsObj[]>([]);

  const columns = useMemo(
    () => [
      { name: "Id", selector: (row: IRow) => row.id, sortable: true },
      { name: "Name", selector: (row: IRow) => row.name, sortable: true },
      {
        cell: (row: IRow) => (
          <Link to={`/team/${row.id}`} data-testid={row.id}>
            Team Details
          </Link>
        ),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
      },
    ],
    []
  );

  React.useEffect(() => {
    const fetchData = async () => {
        const getTeamsResponse = await getAllTeams();
        setData(getTeamsResponse);
    };

    fetchData();
  }, []);

  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);
  const filteredItems = data.filter(
    (item) =>
      item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFilterText(e.target.value)
        }
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  return (
        <div className="container">
        <DataTable
            data-testid="table"
            title="Team List"
            columns={columns}
            data={filteredItems}
            pagination
            paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
            subHeader
            subHeaderComponent={subHeaderComponentMemo}
            persistTableHead
        />
        </div>
  );
}
