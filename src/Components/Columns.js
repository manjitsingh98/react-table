export const COLUMNS = [
    {
        Header: 'Id',
        accessor: 'id'
    },
    {
        Header: 'First Name',
        accessor: 'first_name'
    },
    {
        Header: 'Last Name',
        accessor: 'last_name'
    },
    {
        Header: 'Date of Birth',
        accessor: 'date_of_birth'
    },
    {
        Header: 'Country',
        accessor: 'country'
    },
    {
        Header: 'Phone',
        accessor: 'phone'
    }
]

export const GROUPED_COLUMNS = [
    {
        Header: 'Id',
        accessor: 'id'
    },
    {
        Header: 'Name',
        Footer: 'Name',
        columns: [
            {
                Header: 'First Name',
                accessor: 'first_name'
            },
            {
                Header: 'Last Name',
                accessor: 'last_name'
            },
        ]
    },
    {
        Header: 'Info',
        columns: [
            {
                Header: 'Date of Birth',
                accessor: 'date_of_birth'
            },
            {
                Header: 'Country',
                accessor: 'country'
            },
            {
                Header: 'Phone',
                accessor: 'phone'
            }
        ]
    }
]