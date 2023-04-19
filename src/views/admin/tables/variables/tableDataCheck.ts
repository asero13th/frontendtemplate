type RowObj = {
	name: [string, boolean];
	progress: string;
	totalSolvers: number;
	date: string; 
};

const tableDataCheck: RowObj[] = [
	{
		name: ['Web crawling', true ],
		totalSolvers: 2458,
		progress: '17.5%',
		date: '12 Jan 2021',
	},
	{
		name: [ 'File proccessing', true ],
		totalSolvers: 1485,
		progress: '10.8%',
		date: '21 Feb 2021',
	},
	{
		name: ['system security', true ],
		totalSolvers: 1024,
		progress: '21.3%',
		date: '13 Mar 2021',
	},
	{
		name: ['imporove efficiency', true ],
		totalSolvers: 858,
		progress: '31.5%',
		date: '24 Jan 2021',
	},

];

export default tableDataCheck;
