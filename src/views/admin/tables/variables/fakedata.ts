type RowObj = {
    id: String,
	userName:String;
	status: string;
    progress: String
    gitHubRepoUrl : String;
	date: string; 
};

const fakedata: RowObj[] = [
	{
        id: "1",
		userName: "@Aser_Hailu",
		status: "Pending",
		progress: '17.5%',
		date: '12 Jan 2021',
        gitHubRepoUrl: "https://github.com/Intern-Connect/InernRepo/tree/master/client"
	},
	{
        id: "2",
		userName: "@Yordanos_yirgu",
        status: "Pending",
		progress: '10.8%',
		date: '21 Feb 2021',
        gitHubRepoUrl: "https://github.com/Intern-Connect/InernRepo/tree/master/client"
	},
	{
        id: "3",
		userName: "@Yordanos_yirgu",
        status: "Pending",
		progress: '21.3%',
		date: '13 Mar 2021',
        gitHubRepoUrl: "https://github.com/Intern-Connect/InernRepo/tree/master/client"
	},
	{
        id: "4",
		userName: "@Aser_Hailu",
        status: "Pending",
		progress: '31.5%',
		date: '24 Jan 2021',
        gitHubRepoUrl: "https://github.com/Intern-Connect/InernRepo/tree/master/client"
	},

];

export default fakedata;
