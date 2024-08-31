import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Bell, Clock, Upload, FileText, CheckCircle } from 'lucide-react';

const StudentDashboard = () => {
  const [documents, setDocuments] = useState([
    { id: 1, name: 'Identity Proof', status: 'Verified', progress: 100 },
    { id: 2, name: 'Academic Records', status: 'Under Review', progress: 60 },
    { id: 3, name: 'Income Certificate', status: 'Pending Upload', progress: 0 },
  ]);

  const [notifications, setNotifications] = useState([
    { id: 1, message: 'Your Identity Proof has been verified.', date: '2024-08-15' },
    { id: 2, message: 'Please upload your Income Certificate.', date: '2024-08-14' },
  ]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">PMSSS Scholarship Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Document Status</CardTitle>
            <CardDescription>Track your document submission progress</CardDescription>
          </CardHeader>
          <CardContent>
            {documents.map((doc) => (
              <div key={doc.id} className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span>{doc.name}</span>
                  <span className={text-sm ${doc.status === 'Verified' ? 'text-green-500' : 'text-yellow-500'}}>
                    {doc.status}
                  </span>
                </div>
                <Progress value={doc.progress} className="w-full" />
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <Upload className="mr-2 h-4 w-4" /> Upload Documents
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>Stay updated on your application status</CardDescription>
          </CardHeader>
          <CardContent>
            {notifications.map((notif) => (
              <div key={notif.id} className="flex items-start mb-4">
                <Bell className="mr-2 h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm">{notif.message}</p>
                  <p className="text-xs text-gray-500">{notif.date}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Scholarship Details</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="status">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="status">Application Status</TabsTrigger>
              <TabsTrigger value="payment">Payment Info</TabsTrigger>
              <TabsTrigger value="schedule">Learning Schedule</TabsTrigger>
            </TabsList>
            <TabsContent value="status">
              <p>Your application is currently under review. We'll notify you of any updates.</p>
            </TabsContent>
            <TabsContent value="payment">
              <p>Next payment scheduled for September 1, 2024. Amount: ₹15,000</p>
            </TabsContent>
            <TabsContent value="schedule">
              <div className="flex items-center justify-between">
                <p>Set time aside to learn and get reminders using your learning scheduler.</p>
                <Button variant="outline">
                  <Clock className="mr-2 h-4 w-4" /> Schedule Learning Time
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <div className="mt-6 flex justify-between items-center">
        <Button variant="outline">
          <FileText className="mr-2 h-4 w-4" /> View All Documents
        </Button>
        <Button variant="outline">
          <CheckCircle className="mr-2 h-4 w-4" /> Check Eligibility
        </Button>
      </div>
    </div>
  );
  
};

export default StudentDashboard;
