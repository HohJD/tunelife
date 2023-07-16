"use client";
import Line from "@/components/charts/line";
import Pie from "@/components/charts/pie";
import Stacked from "@/components/charts/stacked";
import { TableSort } from "@/components/searchBar";
import { mono, satoshi } from "@/lib/fonts";
import clsx from "clsx";
import { LayoutDashboard } from "lucide-react";
import React from "react";

const Dashboard = () => {
  return (
    <main className={clsx(["pb-10 pt-5 flex flex-col max-w-5xl mx-auto px-2", satoshi.className])}>
      <section className="w-full space-y-10">
        <div className="flex items-center gap-3 mb-8">
          <LayoutDashboard className="text-[#01a9a0] w-5 h-5" />
          <p className={clsx(["text-xl font-bold", mono.className])}>
            <span className="text-[#01a9a0]">Dashbo</span>
            <span>ard</span>
          </p>
        </div>
        <p className={clsx(["text-xl font-bold", mono.className])}>
            <span className="text-[#01a9a0]">Overview</span>
          </p>
        <Line />
        <p className={clsx(["text-xl font-bold", mono.className])}>
            <span className="text-[#01a9a0]">List of Applicants</span>
          </p>
        <TableSort
  data={[
    { id: "PX0001", name: "John Doe",  role: "Software Engineer", status: "Stage 5", recruiter: "Azad", priority: "High" },
    { id: "PX0002", name: "Jane Smith",  role: "UI/UX Designer", status: "Stage 3", recruiter: "Sarah", priority: "Medium" },
    { id: "PX0003", name: "Alex Johnson",  role: "Product Manager", status: "Stage 4", recruiter: "Mike", priority: "High" },
    { id: "PX0004", name: "Emily Brown", role: "Frontend Developer", status: "Stage 2", recruiter: "Jake", priority: "Low" },
    { id: "PX0005", name: "Michael Wilson", role: "Backend Developer", status: "Stage 1", recruiter: "Emma", priority: "Medium" },
    { id: "PX0006", name: "Sophia Davis", role: "Data Analyst", status: "Stage 3", recruiter: "David", priority: "High" },
    { id: "PX0007", name: "Oliver Garcia", role: "Mobile Developer", status: "Stage 4", recruiter: "Lily", priority: "Medium" },
    { id: "PX0008", name: "Isabella Martinez", role: "Graphic Designer", status: "Stage 2", recruiter: "Ethan", priority: "Low" },
    { id: "PX0009", name: "William Thompson", role: "DevOps Engineer", status: "Stage 5", recruiter: "Ava", priority: "High" },
    { id: "PX0010", name: "Mia Anderson", role: "Project Manager", status: "Stage 3", recruiter: "Noah", priority: "Medium" },
    // Add more data objects here
  ]}
/>

       
      </section>
    </main>
  );
};

export default Dashboard;
