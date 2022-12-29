import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import EachMember from './EachMember';


// const ProfileTab: React.FC = () => {
//     // 1. Create the component
//     function DataTabs({ data: []}) {
//         return (
//             <Tabs>
//                 <TabList>
//                     {data.map((tab, index) => (
//                         <Tab key={index}>{tab.label}</Tab>
//                     ))}
//                 </TabList>
//                 <TabPanels>
//                     {data.map((tab, index) => (
//                         <TabPanel p={4} key={index}>
//                             {tab.content}
//                         </TabPanel>
//                     ))}
//                 </TabPanels>
//             </Tabs>
//         )
//     }

//     // 2. Create an array of data
//     const tabData = [
//         {
//             label: 'Nigerian Jollof',
//             content: 'Perhaps the greatest dish ever invented.',
//         },
//         {
//             label: 'Pounded Yam & Egusi',
//             content:
//                 'Perhaps the surest dish ever invented but fills the stomach more than rice.',
//         }
//     ];

//     // 3. Pass the props and chill!
//     return <DataTabs data={tabData} />
// }

const ProfileTab = () => {

    const memberInfo = [
        {
            id: 1,
            name: "Md Rabiullah",
            mockInterview: {
                mockInterviewer1: "Md.Rakibul Islam",
                mock1Number: 23,
                mockInterviewer2: "Mihir Roy",
                mock2Number: 35,
                mockInterviewer3: "Alok Rajbongshi",
                mock3Number: 45,
                mockInterviewer4: "Avik Sarker",
                mock4Number: 34,
                mockInterviewAvg: 345,
            },
            apply: {
                dec20Applied: 12,
                dec21Applied: 12,
                dec22Applied: 12,
                dec23Applied: 12,
                dec24Applied: 12,
                dec25Applied: 12,
                dec26Applied: 12,
                dec27Applied: 12,
                dec28Applied: 12,
                dec29Applied: 12,
                dec30Applied: 12,
                totalApply: 123,
            },
            projects: {
                project1: {
                    project1Reviewer1: "Md.Rakibul Islam",
                    project1Review1: "gs",
                    project1Marks1: 4,
                    project1Reviewer2: "Mihir Roy",
                    project1Review2: "dffgd",
                    project1Marks2: 5,
                    project1Reviewer3: "Alok Rajbongshi",
                    project1Review3: "dfdf",
                    project1Marks3: 4,
                    project1Reviewer4: "Avik Sarker",
                    project1Review4: "fgf",
                    project1Marks4: 5,
                    project1AvgMarks: 8,
                },
                project2: {
                    project2Reviewer1: "Md.Rakibul Islam",
                    project2Review1: "f",
                    project2Marks1: 7,
                    project2Reviewer2: "Mihir Roy",
                    project2Review2: "dgdh",
                    project2Marks2: 5,
                    project2Reviewer3: "Alok Rajbongshi",
                    project2Review3: "fgg",
                    project2Marks3: 8,
                    project2Reviewer4: "Avik Sarker",
                    project2Review4: "fg",
                    project2Marks4: 8,
                    project2AvgMarks: 5,
                },
                project3: {
                    project3Reviewer1: "Md.Rakibul Islam",
                    project3Review1: "ss",
                    project3Marks1: 5,
                    project3Reviewer2: "Mihir Roy",
                    project3Review2: "ss",
                    project3Marks2: 5,
                    project3Reviewer3: "Alok Rajbongshi",
                    project3Review3: "sdffs",
                    project3Marks3: 5,
                    project3Reviewer4: "Avik Sarker",
                    project3Review4: "sdf",
                    project3Marks4: 5,
                    project3AvgMarks: 7,
                },
                totalProjectAvg: 4,
            },
            total: 56,
        },
        {
            id: 2,
            name: "Md.Rakibul Islam",
            mockInterview: {
                mockInterviewer1: "Md.Rakibul Islam",
                mock1Number: 23,
                mockInterviewer2: "Mihir Roy",
                mock2Number: 35,
                mockInterviewer3: "Alok Rajbongshi",
                mock3Number: 45,
                mockInterviewer4: "Avik Sarker",
                mock4Number: 34,
                mockInterviewAvg: 345,
            },
            apply: {
                dec20Applied: 12,
                dec21Applied: 12,
                dec22Applied: 12,
                dec23Applied: 12,
                dec24Applied: 12,
                dec25Applied: 12,
                dec26Applied: 12,
                dec27Applied: 12,
                dec28Applied: 12,
                dec29Applied: 12,
                dec30Applied: 12,
                totalApply: 123,
            },
            projects: {
                project1: {
                    project1Reviewer1: "Md.Rakibul Islam",
                    project1Review1: "gs",
                    project1Marks1: 4,
                    project1Reviewer2: "Mihir Roy",
                    project1Review2: "dffgd",
                    project1Marks2: 5,
                    project1Reviewer3: "Alok Rajbongshi",
                    project1Review3: "dfdf",
                    project1Marks3: 4,
                    project1Reviewer4: "Avik Sarker",
                    project1Review4: "fgf",
                    project1Marks4: 5,
                    project1AvgMarks: 8,
                },
                project2: {
                    project2Reviewer1: "Md.Rakibul Islam",
                    project2Review1: "f",
                    project2Marks1: 7,
                    project2Reviewer2: "Mihir Roy",
                    project2Review2: "dgdh",
                    project2Marks2: 5,
                    project2Reviewer3: "Alok Rajbongshi",
                    project2Review3: "fgg",
                    project2Marks3: 8,
                    project2Reviewer4: "Avik Sarker",
                    project2Review4: "fg",
                    project2Marks4: 8,
                    project2AvgMarks: 5,
                },
                project3: {
                    project3Reviewer1: "Md.Rakibul Islam",
                    project3Review1: "ss",
                    project3Marks1: 5,
                    project3Reviewer2: "Mihir Roy",
                    project3Review2: "ss",
                    project3Marks2: 5,
                    project3Reviewer3: "Alok Rajbongshi",
                    project3Review3: "sdffs",
                    project3Marks3: 5,
                    project3Reviewer4: "Avik Sarker",
                    project3Review4: "sdf",
                    project3Marks4: 5,
                    project3AvgMarks: 7,
                },
                totalProjectAvg: 4,
            },
            total: 56,
        },
        {
            id: 3,
            name: "Mihir Roy",
            mockInterview: {
                mockInterviewer1: "Md.Rakibul Islam",
                mock1Number: 23,
                mockInterviewer2: "Mihir Roy",
                mock2Number: 35,
                mockInterviewer3: "Alok Rajbongshi",
                mock3Number: 45,
                mockInterviewer4: "Avik Sarker",
                mock4Number: 34,
                mockInterviewAvg: 345,
            },
            apply: {
                dec20Applied: 12,
                dec21Applied: 12,
                dec22Applied: 12,
                dec23Applied: 12,
                dec24Applied: 12,
                dec25Applied: 12,
                dec26Applied: 12,
                dec27Applied: 12,
                dec28Applied: 12,
                dec29Applied: 12,
                dec30Applied: 12,
                totalApply: 123,
            },
            projects: {
                project1: {
                    project1Reviewer1: "Md.Rakibul Islam",
                    project1Review1: "gs",
                    project1Marks1: 4,
                    project1Reviewer2: "Mihir Roy",
                    project1Review2: "dffgd",
                    project1Marks2: 5,
                    project1Reviewer3: "Alok Rajbongshi",
                    project1Review3: "dfdf",
                    project1Marks3: 4,
                    project1Reviewer4: "Avik Sarker",
                    project1Review4: "fgf",
                    project1Marks4: 5,
                    project1AvgMarks: 8,
                },
                project2: {
                    project2Reviewer1: "Md.Rakibul Islam",
                    project2Review1: "f",
                    project2Marks1: 7,
                    project2Reviewer2: "Mihir Roy",
                    project2Review2: "dgdh",
                    project2Marks2: 5,
                    project2Reviewer3: "Alok Rajbongshi",
                    project2Review3: "fgg",
                    project2Marks3: 8,
                    project2Reviewer4: "Avik Sarker",
                    project2Review4: "fg",
                    project2Marks4: 8,
                    project2AvgMarks: 5,
                },
                project3: {
                    project3Reviewer1: "Md.Rakibul Islam",
                    project3Review1: "ss",
                    project3Marks1: 5,
                    project3Reviewer2: "Mihir Roy",
                    project3Review2: "ss",
                    project3Marks2: 5,
                    project3Reviewer3: "Alok Rajbongshi",
                    project3Review3: "sdffs",
                    project3Marks3: 5,
                    project3Reviewer4: "Avik Sarker",
                    project3Review4: "sdf",
                    project3Marks4: 5,
                    project3AvgMarks: 7,
                },
                totalProjectAvg: 4,
            },
            total: 56,
        },
        {
            id: 4,
            name: "Alok Rajbongshi",
            mockInterview: {
                mockInterviewer1: "Md.Rakibul Islam",
                mock1Number: 23,
                mockInterviewer2: "Mihir Roy",
                mock2Number: 35,
                mockInterviewer3: "Alok Rajbongshi",
                mock3Number: 45,
                mockInterviewer4: "Avik Sarker",
                mock4Number: 34,
                mockInterviewAvg: 345,
            },
            apply: {
                dec20Applied: 12,
                dec21Applied: 12,
                dec22Applied: 12,
                dec23Applied: 12,
                dec24Applied: 12,
                dec25Applied: 12,
                dec26Applied: 12,
                dec27Applied: 12,
                dec28Applied: 12,
                dec29Applied: 12,
                dec30Applied: 12,
                totalApply: 123,
            },
            projects: {
                project1: {
                    project1Reviewer1: "Md.Rakibul Islam",
                    project1Review1: "gs",
                    project1Marks1: 4,
                    project1Reviewer2: "Mihir Roy",
                    project1Review2: "dffgd",
                    project1Marks2: 5,
                    project1Reviewer3: "Alok Rajbongshi",
                    project1Review3: "dfdf",
                    project1Marks3: 4,
                    project1Reviewer4: "Avik Sarker",
                    project1Review4: "fgf",
                    project1Marks4: 5,
                    project1AvgMarks: 8,
                },
                project2: {
                    project2Reviewer1: "Md.Rakibul Islam",
                    project2Review1: "f",
                    project2Marks1: 7,
                    project2Reviewer2: "Mihir Roy",
                    project2Review2: "dgdh",
                    project2Marks2: 5,
                    project2Reviewer3: "Alok Rajbongshi",
                    project2Review3: "fgg",
                    project2Marks3: 8,
                    project2Reviewer4: "Avik Sarker",
                    project2Review4: "fg",
                    project2Marks4: 8,
                    project2AvgMarks: 5,
                },
                project3: {
                    project3Reviewer1: "Md.Rakibul Islam",
                    project3Review1: "ss",
                    project3Marks1: 5,
                    project3Reviewer2: "Mihir Roy",
                    project3Review2: "ss",
                    project3Marks2: 5,
                    project3Reviewer3: "Alok Rajbongshi",
                    project3Review3: "sdffs",
                    project3Marks3: 5,
                    project3Reviewer4: "Avik Sarker",
                    project3Review4: "sdf",
                    project3Marks4: 5,
                    project3AvgMarks: 7,
                },
                totalProjectAvg: 4,
            },
            total: 56,
        },
        {
            id: 5,
            name: "Avik Sarker",
            mockInterview: {
                mockInterviewer1: "Md.Rakibul Islam",
                mock1Number: 23,
                mockInterviewer2: "Mihir Roy",
                mock2Number: 35,
                mockInterviewer3: "Alok Rajbongshi",
                mock3Number: 45,
                mockInterviewer4: "Avik Sarker",
                mock4Number: 34,
                mockInterviewAvg: 345,
            },
            apply: {
                dec20Applied: 12,
                dec21Applied: 12,
                dec22Applied: 12,
                dec23Applied: 12,
                dec24Applied: 12,
                dec25Applied: 12,
                dec26Applied: 12,
                dec27Applied: 12,
                dec28Applied: 12,
                dec29Applied: 12,
                dec30Applied: 12,
                totalApply: 123,
            },
            projects: {
                project1: {
                    project1Reviewer1: "Md.Rakibul Islam",
                    project1Review1: "gs",
                    project1Marks1: 4,
                    project1Reviewer2: "Mihir Roy",
                    project1Review2: "dffgd",
                    project1Marks2: 5,
                    project1Reviewer3: "Alok Rajbongshi",
                    project1Review3: "dfdf",
                    project1Marks3: 4,
                    project1Reviewer4: "Avik Sarker",
                    project1Review4: "fgf",
                    project1Marks4: 5,
                    project1AvgMarks: 8,
                },
                project2: {
                    project2Reviewer1: "Md.Rakibul Islam",
                    project2Review1: "f",
                    project2Marks1: 7,
                    project2Reviewer2: "Mihir Roy",
                    project2Review2: "dgdh",
                    project2Marks2: 5,
                    project2Reviewer3: "Alok Rajbongshi",
                    project2Review3: "fgg",
                    project2Marks3: 8,
                    project2Reviewer4: "Avik Sarker",
                    project2Review4: "fg",
                    project2Marks4: 8,
                    project2AvgMarks: 5,
                },
                project3: {
                    project3Reviewer1: "Md.Rakibul Islam",
                    project3Review1: "ss",
                    project3Marks1: 5,
                    project3Reviewer2: "Mihir Roy",
                    project3Review2: "ss",
                    project3Marks2: 5,
                    project3Reviewer3: "Alok Rajbongshi",
                    project3Review3: "sdffs",
                    project3Marks3: 5,
                    project3Reviewer4: "Avik Sarker",
                    project3Review4: "sdf",
                    project3Marks4: 5,
                    project3AvgMarks: 7,
                },
                totalProjectAvg: 4,
            },
            total: 56,
        },
    ];

    return (
        <Tabs>
            <TabList>
                {memberInfo.map((member) => (
                    <Tab key={member.id}>{member.name}</Tab>
                ))}
                {/* <Tab>Md Rabiullah</Tab>
                <Tab>Md.Rakibul Islam</Tab>
                <Tab>Mihir Roy</Tab>
                <Tab>Alok Rajbongshi</Tab>
                <Tab>Avik Sarker</Tab> */}
            </TabList>

            <TabPanels>
                {memberInfo.map((member) => (
                    <TabPanel key={member.id} >
                        <EachMember member={member}></EachMember>
                    </TabPanel>
                ))}
                {/* <TabPanel>
                    <p>two!</p>
                </TabPanel>
                <TabPanel>
                    <p>three!</p>
                </TabPanel>
                <TabPanel>
                    <p>three!</p>
                </TabPanel>
                <TabPanel>
                    <p>three!</p>
                </TabPanel> */}
            </TabPanels>
        </Tabs>
    );
};

export default ProfileTab;