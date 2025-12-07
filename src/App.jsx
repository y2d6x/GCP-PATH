import React, { useState, useEffect } from 'react';

import { 

  Cloud, 

  Server, 

  Database, 

  Code, 

  Terminal, 

  Layers, 

  CheckCircle2, 

  Circle, 

  ChevronDown, 

  ChevronUp,

  Trophy,

  Activity

} from 'lucide-react';



const roadmapData = [

  {

    month: 1,

    title: "GCP Cloud Developer",

    subtitle: "Core Foundations",

    icon: <Cloud className="w-6 h-6" />,

    color: "blue",

    goal: "Become fully capable of building & deploying cloud-native apps.",

    weeks: [

      {

        week: 1,

        topic: "GCP Fundamentals & Security",

        items: [

          "GCP Fundamentals (Regions, Zones)",

          "IAM Basics (Roles, Permissions)",

          "Service Accounts & Keys",

          "Cloud Shell & SDK Setup",

          "Monitoring Basics"

        ]

      },

      {

        week: 2,

        topic: "Compute & Serverless",

        items: [

          "Cloud Run Deep Dive",

          "Cloud Functions (2nd Gen)",

          "App Engine (Standard vs Flexible)",

          "⚒ Mini Project: Deploy Node.js API to Cloud Run"

        ]

      },

      {

        week: 3,

        topic: "Storage & Databases",

        items: [

          "Cloud SQL (PostgreSQL/MySQL)",

          "Firestore (NoSQL)",

          "Cloud Storage (Buckets, Classes)",

          "⚒ Mini Project: API + Cloud SQL + Storage (Image Upload)"

        ]

      },

      {

        week: 4,

        topic: "Networking & CI/CD Basics",

        items: [

          "VPC Networks & Subnets",

          "Load Balancers (HTTP/S)",

          "Secrets Manager",

          "Cloud Build Basics",

          "⚒ Project: Full API with CI/CD → Cloud Run"

        ]

      }

    ]

  },

  {

    month: 2,

    title: "Advanced Developer + DevOps Intro",

    subtitle: "Containers & Reliability",

    icon: <Server className="w-6 h-6" />,

    color: "indigo",

    goal: "Cloud Native Development + Deep Docker & CI/CD.",

    weeks: [

      {

        week: 5,

        topic: "Docker Mastery",

        items: [

          "Docker Deep Dive",

          "Multi-stage Builds",

          "Artifact Registry",

          "Container Optimization"

        ]

      },

      {

        week: 6,

        topic: "Advanced CI/CD",

        items: [

          "Cloud Build Advanced Pipelines",

          "Cloud Deploy",

          "Private Services Access"

        ]

      },

      {

        week: 7,

        topic: "Event-Driven Architecture",

        items: [

          "Pub/Sub (Topics, Subs, Push/Pull)",

          "Cloud Scheduler",

          "⚒ Project: User Signup → Pub/Sub → Worker"

        ]

      },

      {

        week: 8,

        topic: "SRE & Observability",

        items: [

          "Cloud Logging (Structured)",

          "Cloud Monitoring (Metrics, Dashboards)",

          "Error Reporting",

          "⚒ Project: Reliability & Error-handling Pipeline"

        ]

      }

    ]

  },

  {

    month: 3,

    title: "GCP DevOps Engineer Track",

    subtitle: "IaC & Kubernetes",

    icon: <Terminal className="w-6 h-6" />,

    color: "purple",

    goal: "Learn real infrastructure, automation & Kubernetes foundations.",

    weeks: [

      {

        week: 9,

        topic: "Linux & Networking Deep Dive",

        items: [

          "Linux Fundamentals & Shell Scripting",

          "VPC Peering & Shared VPC",

          "Firewall Rules & Routes"

        ]

      },

      {

        week: 10,

        topic: "Infrastructure as Code (Terraform)",

        items: [

          "Terraform Basics (State, HCL)",

          "Providers & Modules",

          "⚒ Project: Deploy Cloud Run + SQL using Terraform"

        ]

      },

      {

        week: 11,

        topic: "Kubernetes (GKE)",

        items: [

          "Kubernetes Concepts (Pods, Services, Deployments)",

          "GKE Standard vs Autopilot",

          "Deploying Containers to GKE"

        ]

      },

      {

        week: 12,

        topic: "K8s Operations",

        items: [

          "CI/CD for Kubernetes",

          "Helm Charts Basics",

          "⚒ Project: Deploy Node.js API on GKE with CI/CD"

        ]

      }

    ]

  },

  {

    month: 4,

    title: "Data Engineering Foundations",

    subtitle: "Warehousing & ETL",

    icon: <Database className="w-6 h-6" />,

    color: "cyan",

    goal: "Build ETL, ELT, pipelines, warehouses, and big-scale data systems.",

    weeks: [

      {

        week: 13,

        topic: "SQL & Modeling",

        items: [

          "SQL Mastery (Window functions, CTEs)",

          "Data Modeling (Star Schema, Snowflake)"

        ]

      },

      {

        week: 14,

        topic: "BigQuery Deep Dive",

        items: [

          "BigQuery Architecture",

          "Partitioning & Clustering",

          "⚒ Project: Build Optimized BigQuery Dataset"

        ]

      },

      {

        week: 15,

        topic: "Ingestion & Batch Pipelines",

        items: [

          "GCS to BigQuery Loading",

          "Dataflow Intro (Batch)",

          "Data Transfer Service"

        ]

      },

      {

        week: 16,

        topic: "Orchestration (Airflow)",

        items: [

          "Cloud Composer (Airflow)",

          "DAG Creation",

          "⚒ Project: ETL GCS → Dataflow → BigQuery (Scheduled)"

        ]

      }

    ]

  },

  {

    month: 5,

    title: "Streaming & Real-Time Data",

    subtitle: "Advanced Data Eng",

    icon: <Activity className="w-6 h-6" />,

    color: "teal",

    goal: "Become capable of building real-time and batch data systems.",

    weeks: [

      {

        week: 17,

        topic: "Advanced Pub/Sub",

        items: [

          "Streaming vs Batch Concepts",

          "Pub/Sub Ordering & Dead Letter Queues",

          "Schema Registry"

        ]

      },

      {

        week: 18,

        topic: "Streaming Pipelines",

        items: [

          "Dataflow Streaming (Apache Beam)",

          "Windowing & Triggers",

          "⚒ Real-time Pipeline: Pub/Sub → Dataflow → BigQuery"

        ]

      },

      {

        week: 19,

        topic: "Kafka & Ingestion",

        items: [

          "Kafka Basics",

          "Micro-batch Ingestion",

          "Datastream"

        ]

      },

      {

        week: 20,

        topic: "Transformation (dbt)",

        items: [

          "dbt Fundamentals",

          "dbt with BigQuery",

          "⚒ Warehouse Modeling with dbt"

        ]

      }

    ]

  },

  {

    month: 6,

    title: "Capstone & Career",

    subtitle: "Portfolio & Certs",

    icon: <Trophy className="w-6 h-6" />,

    color: "yellow",

    goal: "Build portfolio + prepare for 3 certifications + apply for roles.",

    weeks: [

      {

        week: 21,

        topic: "Capstone Project (Part 1)",

        items: [

          "Design E-Commerce Data Platform",

          "Build API (Cloud Run) & Order System",

          "Setup Pub/Sub & Infrastructure (Terraform)"

        ]

      },

      {

        week: 22,

        topic: "Capstone Project (Part 2)",

        items: [

          "Implement Dataflow Streaming Pipeline",

          "BigQuery Warehouse & dbt Transformations",

          "Looker Studio Dashboard"

        ]

      },

      {

        week: 23,

        topic: "Portfolio & Personal Brand",

        items: [

          "GitHub Cleanup & Documentation",

          "Portfolio Website",

          "Resume Optimization"

        ]

      },

      {

        week: 24,

        topic: "Exam Prep & Applications",

        items: [

          "Mock Exams (Developer/DevOps/Data)",

          "Final Review",

          "Job Applications"

        ]

      }

    ]

  }

];



const ProgressBar = ({ progress, color }) => {

  const getColorClass = (c) => {

    switch (c) {

      case 'blue': return 'bg-blue-500';

      case 'indigo': return 'bg-indigo-500';

      case 'purple': return 'bg-purple-500';

      case 'cyan': return 'bg-cyan-500';

      case 'teal': return 'bg-teal-500';

      case 'yellow': return 'bg-yellow-500';

      default: return 'bg-green-500';

    }

  };



  return (

    <div className="w-full bg-slate-700 rounded-full h-2.5 mb-1">

      <div 

        className={`${getColorClass(color)} h-2.5 rounded-full transition-all duration-500`} 

        style={{ width: `${progress}%` }}

      ></div>

    </div>

  );

};



export default function App() {

  const [completedItems, setCompletedItems] = useState(() => {

    // Load from local storage or default to empty set

    try {

      const saved = localStorage.getItem('gcpRoadmapProgress');

      return saved ? new Set(JSON.parse(saved)) : new Set();

    } catch (e) {

      return new Set();

    }

  });



  const [expandedMonth, setExpandedMonth] = useState(1);



  useEffect(() => {

    // Save to local storage whenever state changes

    localStorage.setItem('gcpRoadmapProgress', JSON.stringify([...completedItems]));

  }, [completedItems]);



  const toggleItem = (id) => {

    const newCompleted = new Set(completedItems);

    if (newCompleted.has(id)) {

      newCompleted.delete(id);

    } else {

      newCompleted.add(id);

    }

    setCompletedItems(newCompleted);

  };



  const getMonthProgress = (monthData) => {

    let total = 0;

    let completed = 0;

    monthData.weeks.forEach(week => {

      week.items.forEach(item => {

        total++;

        if (completedItems.has(`${monthData.month}-${week.week}-${item}`)) {

          completed++;

        }

      });

    });

    return total === 0 ? 0 : Math.round((completed / total) * 100);

  };



  const getTotalProgress = () => {

    let total = 0;

    let completed = 0;

    roadmapData.forEach(month => {

      month.weeks.forEach(week => {

        week.items.forEach(item => {

          total++;

          if (completedItems.has(`${month.month}-${week.week}-${item}`)) {

            completed++;

          }

        });

      });

    });

    return total === 0 ? 0 : Math.round((completed / total) * 100);

  };



  const resetProgress = () => {

    if (confirm("Are you sure you want to reset all progress?")) {

      setCompletedItems(new Set());

    }

  };



  return (

    <div className="min-h-screen bg-slate-900 text-slate-100 p-4 md:p-8 font-sans">

      <div className="max-w-4xl mx-auto">

        

        {/* Header */}

        <div className="mb-8 text-center md:text-left">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">

            <div>

              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">

                GCP Zero to Hero

              </h1>

              <p className="text-slate-400 mt-2">

                6-Month Master Roadmap: Cloud Dev → DevOps → Data Eng

              </p>

            </div>

            

            <div className="mt-6 md:mt-0 p-4 bg-slate-800 rounded-lg border border-slate-700 min-w-[200px]">

              <div className="flex justify-between items-end mb-2">

                <span className="text-sm text-slate-400 font-medium">Total Progress</span>

                <span className="text-2xl font-bold text-teal-400">{getTotalProgress()}%</span>

              </div>

              <ProgressBar progress={getTotalProgress()} color="teal" />

            </div>

          </div>

        </div>



        {/* Timeline Items */}

        <div className="space-y-6">

          {roadmapData.map((month) => {

            const isExpanded = expandedMonth === month.month;

            const progress = getMonthProgress(month);

            

            return (

              <div 

                key={month.month} 

                className={`bg-slate-800 rounded-xl overflow-hidden border transition-all duration-300 ${

                  isExpanded ? 'border-slate-500 shadow-lg shadow-blue-900/10' : 'border-slate-700 hover:border-slate-600'

                }`}

              >

                {/* Month Header */}

                <div 

                  onClick={() => setExpandedMonth(isExpanded ? null : month.month)}

                  className="p-5 cursor-pointer flex flex-col md:flex-row md:items-center gap-4"

                >

                  <div className={`p-3 rounded-lg bg-slate-700/50 ${month.color === 'blue' ? 'text-blue-400' : month.color === 'indigo' ? 'text-indigo-400' : month.color === 'purple' ? 'text-purple-400' : month.color === 'cyan' ? 'text-cyan-400' : month.color === 'teal' ? 'text-teal-400' : 'text-yellow-400'}`}>

                    {month.icon}

                  </div>

                  

                  <div className="flex-1">

                    <div className="flex items-center gap-2 mb-1">

                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Month {month.month}</span>

                      {progress === 100 && <span className="text-xs bg-green-900 text-green-300 px-2 py-0.5 rounded-full flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> Complete</span>}

                    </div>

                    <h3 className="text-xl font-bold text-white">{month.title}</h3>

                    <p className="text-sm text-slate-400">{month.subtitle}</p>

                  </div>



                  <div className="flex items-center gap-4 w-full md:w-auto mt-2 md:mt-0">

                    <div className="flex-1 md:w-32">

                      <div className="flex justify-between text-xs mb-1">

                        <span className="text-slate-500">Completion</span>

                        <span className="text-slate-300">{progress}%</span>

                      </div>

                      <ProgressBar progress={progress} color={month.color} />

                    </div>

                    {isExpanded ? <ChevronUp className="text-slate-500" /> : <ChevronDown className="text-slate-500" />}

                  </div>

                </div>



                {/* Expanded Content */}

                {isExpanded && (

                  <div className="border-t border-slate-700 bg-slate-800/50 p-6 animate-fadeIn">

                    <p className="mb-6 text-slate-300 italic border-l-4 border-slate-600 pl-4 py-1">

                      Target: {month.goal}

                    </p>

                    

                    <div className="grid gap-6 md:grid-cols-2">

                      {month.weeks.map((week) => (

                        <div key={week.week} className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">

                          <h4 className="font-semibold text-slate-200 mb-3 flex items-center gap-2">

                            <span className="bg-slate-700 text-slate-300 text-xs px-2 py-1 rounded">Week {week.week}</span>

                            {week.topic}

                          </h4>

                          <ul className="space-y-3">

                            {week.items.map((item) => {

                              const itemId = `${month.month}-${week.week}-${item}`;

                              const isChecked = completedItems.has(itemId);

                              const isProject = item.includes("Project") || item.includes("Real-time pipeline");

                              

                              return (

                                <li 

                                  key={itemId} 

                                  onClick={() => toggleItem(itemId)}

                                  className={`flex items-start gap-3 text-sm cursor-pointer group select-none transition-colors ${

                                    isChecked ? 'text-slate-500 line-through' : 'text-slate-300 hover:text-white'

                                  }`}

                                >

                                  <div className={`mt-0.5 transition-colors ${isChecked ? 'text-green-500' : 'text-slate-600 group-hover:text-slate-500'}`}>

                                    {isChecked ? <CheckCircle2 className="w-5 h-5" /> : <Circle className="w-5 h-5" />}

                                  </div>

                                  <span className={isProject && !isChecked ? "text-amber-400 font-medium" : ""}>

                                    {item}

                                  </span>

                                </li>

                              );

                            })}

                          </ul>

                        </div>

                      ))}

                    </div>

                  </div>

                )}

              </div>

            );

          })}

        </div>



        <div className="mt-12 text-center pb-8">

          <p className="text-slate-500 text-sm mb-4">

            Progress is saved automatically to your browser.

          </p>

          <button 

            onClick={resetProgress}

            className="text-red-400 hover:text-red-300 text-sm hover:underline"

          >

            Reset Progress

          </button>

        </div>

      </div>

    </div>

  );

}
