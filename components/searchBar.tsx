import { useState } from 'react';
import { createStyles, Table, ScrollArea, UnstyledButton, Group, Text, Center, TextInput, rem } from '@mantine/core';
import { keys } from '@mantine/utils';
import { IconSelector, IconChevronDown, IconChevronUp, IconSearch } from '@tabler/icons-react';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  th: {
    padding: '0 !important',
  },
  control: {
    width: '100%',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },
  icon: {
    width: rem(21),
    height: rem(21),
    borderRadius: rem(21),
  },
  priorityLow: {
    color: theme.colors.green[7],
  },
  priorityMedium: {
    color: theme.colors.yellow[7],
  },
  priorityHigh: {
    color: theme.colors.red[7],
  },
}));

type Classes = {
  th: string;
  control: string;
  icon: string;
  priorityLow: string;
  priorityMedium: string;
  priorityHigh: string;
};

interface RowData {
  id: string;
  name: string;
  role: string;
  status: string;
  recruiter: string;
  priority: string;
}

interface TableSortProps {
  data: RowData[];
}

interface ThProps {
  children: React.ReactNode;
  reversed: boolean;
  sorted: boolean;
  onSort(): void;
}

function Th({ children, reversed, sorted, onSort }: ThProps) {
  const { classes } = useStyles();
  const Icon = sorted ? (reversed ? IconChevronUp : IconChevronDown) : IconSelector;
  return (
    <th className={classes.th}>
      <UnstyledButton onClick={onSort} className={classes.control}>
        <Group position="apart">
          <Text fw={500} fz="sm">
            {children}
          </Text>
          <Center className={classes.icon}>
            <Icon size="0.9rem" stroke={1.5} />
          </Center>
        </Group>
      </UnstyledButton>
    </th>
  );
}

function filterData(data: RowData[], search: string) {
  const query = search.toLowerCase().trim();
  return data.filter((item) =>
    keys(data[0]).some((key) => item[key].toLowerCase().includes(query))
  );
}

function sortData(
  data: RowData[],
  payload: { sortBy: keyof RowData | null; reversed: boolean; search: string }
) {
  const { sortBy } = payload;

  if (!sortBy) {
    return filterData(data, payload.search);
  }

  return filterData(
    [...data].sort((a, b) => {
      if (payload.reversed) {
        return b[sortBy].localeCompare(a[sortBy]);
      }

      return a[sortBy].localeCompare(b[sortBy]);
    }),
    payload.search
  );
}

export function TableSort({ data }: TableSortProps) {
  const [search, setSearch] = useState('');
  const [sortedData, setSortedData] = useState(data);
  const [sortBy, setSortBy] = useState<keyof RowData | null>(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);

  const setSorting = (field: keyof RowData) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    setSortedData(sortData(data, { sortBy: field, reversed, search }));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearch(value);
    setSortedData(sortData(data, { sortBy, reversed: reverseSortDirection, search: value }));
  };

  const getPriorityClass = (priority: string): keyof Classes => {
    switch (priority) {
      case 'low':
        return 'priorityLow';
      case 'medium':
        return 'priorityMedium';
      case 'high':
        return 'priorityHigh';
      default:
        return '' as keyof Classes;
    }
  };

  const { classes } = useStyles();

  const rows = sortedData.map((row) => (
    <tr key={row.name}>
      <td>{row.id}</td>
      <td>{row.name}</td>
      <td>
        <Link href="/application" passHref>
          {row.role}
        </Link>
      </td>
      <td>{row.status}</td>
      <td>{row.recruiter}</td>
      <td className={classes[getPriorityClass(row.priority)]}>{row.priority}</td>
    </tr>
  ));

  return (
    <ScrollArea>
      <TextInput
        placeholder="Search by any field"
        mb="md"
        icon={<IconSearch size="0.9rem" stroke={1.5} />}
        value={search}
        onChange={handleSearchChange}
      />
      <Table horizontalSpacing="md" verticalSpacing="xs" miw={700} sx={{ tableLayout: 'fixed' }}>
        <thead>
          <tr>
            <Th
              sorted={sortBy === 'id'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('id')}
            >
              ID
            </Th>
            <Th
              sorted={sortBy === 'name'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('name')}
            >
              Name
            </Th>
            
            <Th
              sorted={sortBy === 'role'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('role')}
            >
              Role
            </Th>
            <Th
              sorted={sortBy === 'status'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('status')}
            >
              Status
            </Th>
            <Th
              sorted={sortBy === 'recruiter'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('recruiter')}
            >
              Recruiter
            </Th>
            <Th
              sorted={sortBy === 'priority'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('priority')}
            >
              Priority
            </Th>
          </tr>
        </thead>
        <tbody>
          {rows.length > 0 ? (
            rows
          ) : (
            <tr>
              <td colSpan={Object.keys(data[0]).length}>
                <Text weight={500} align="center">
                  Nothing found
                </Text>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </ScrollArea>
  );
}
