import React from 'react';
import './ApplicationInsights.css';

const ApplicationInsights = () => {
  // Static data for various metrics
  const performanceMetrics = {
    responseTime: 245,
    throughput: 1250,
    errorRate: 0.8,
    availability: 99.95
  };

  const requestData = [
    { time: '00:00', requests: 120, errors: 2 },
    { time: '04:00', requests: 85, errors: 1 },
    { time: '08:00', requests: 340, errors: 5 },
    { time: '12:00', requests: 520, errors: 8 },
    { time: '16:00', requests: 480, errors: 6 },
    { time: '20:00', requests: 290, errors: 3 }
  ];

  const topEndpoints = [
    { endpoint: '/api/users', requests: 15420, avgTime: 180 },
    { endpoint: '/api/products', requests: 12350, avgTime: 220 },
    { endpoint: '/api/orders', requests: 8970, avgTime: 340 },
    { endpoint: '/api/auth/login', requests: 6540, avgTime: 150 },
    { endpoint: '/api/dashboard', requests: 4320, avgTime: 280 }
  ];

  const errorBreakdown = [
    { type: '4xx Client Errors', count: 245, percentage: 65 },
    { type: '5xx Server Errors', count: 98, percentage: 26 },
    { type: 'Timeouts', count: 34, percentage: 9 }
  ];

  const geographicData = [
    { region: 'North America', users: 45230, latency: 120 },
    { region: 'Europe', users: 32150, latency: 95 },
    { region: 'Asia Pacific', users: 28940, latency: 180 },
    { region: 'South America', users: 12340, latency: 250 },
    { region: 'Africa', users: 5670, latency: 320 }
  ];

  const systemHealth = {
    cpu: 68,
    memory: 72,
    disk: 45,
    network: 23
  };

  return (
    <div className="insights-dashboard">
      <header className="dashboard-header">
        <h1>Application Insights Dashboard</h1>
        <div className="last-updated">Last updated: {new Date().toLocaleString()}</div>
      </header>

      {/* Key Performance Indicators */}
      <section className="kpi-section">
        <div className="kpi-grid">
          <div className="kpi-card">
            <div className="kpi-value">{performanceMetrics.responseTime}ms</div>
            <div className="kpi-label">Avg Response Time</div>
            <div className="kpi-trend positive">↓ 12ms from yesterday</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-value">{performanceMetrics.throughput.toLocaleString()}</div>
            <div className="kpi-label">Requests/Hour</div>
            <div className="kpi-trend positive">↑ 8.5% from yesterday</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-value">{performanceMetrics.errorRate}%</div>
            <div className="kpi-label">Error Rate</div>
            <div className="kpi-trend negative">↑ 0.2% from yesterday</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-value">{performanceMetrics.availability}%</div>
            <div className="kpi-label">Availability</div>
            <div className="kpi-trend positive">↑ 0.05% from yesterday</div>
          </div>
        </div>
      </section>

      {/* Request Timeline */}
      <section className="chart-section">
        <h2>Request Volume Over Time</h2>
        <div className="chart-container">
          <div className="timeline-chart">
            {requestData.map((data, index) => (
              <div key={index} className="timeline-bar">
                <div 
                  className="bar requests-bar" 
                  style={{ height: `${(data.requests / 600) * 100}%` }}
                ></div>
                <div 
                  className="bar errors-bar" 
                  style={{ height: `${(data.errors / 10) * 100}%` }}
                ></div>
                <div className="bar-label">{data.time}</div>
                <div className="bar-values">
                  <span className="requests-value">{data.requests}</span>
                  <span className="errors-value">{data.errors}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="chart-legend">
            <div className="legend-item">
              <div className="legend-color requests"></div>
              <span>Requests</span>
            </div>
            <div className="legend-item">
              <div className="legend-color errors"></div>
              <span>Errors</span>
            </div>
          </div>
        </div>
      </section>

      {/* Top Endpoints */}
      <section className="table-section">
        <h2>Top API Endpoints</h2>
        <div className="table-container">
          <table className="insights-table">
            <thead>
              <tr>
                <th>Endpoint</th>
                <th>Requests</th>
                <th>Avg Response Time</th>
                <th>Performance</th>
              </tr>
            </thead>
            <tbody>
              {topEndpoints.map((endpoint, index) => (
                <tr key={index}>
                  <td className="endpoint-path">{endpoint.endpoint}</td>
                  <td>{endpoint.requests.toLocaleString()}</td>
                  <td>{endpoint.avgTime}ms</td>
                  <td>
                    <div className="performance-bar">
                      <div 
                        className={`performance-fill ${endpoint.avgTime > 300 ? 'slow' : endpoint.avgTime > 200 ? 'medium' : 'fast'}`}
                        style={{ width: `${Math.min((endpoint.avgTime / 400) * 100, 100)}%` }}
                      ></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Error Analysis and Geographic Distribution */}
      <div className="two-column-section">
        <section className="error-analysis">
          <h2>Error Breakdown</h2>
          <div className="error-chart">
            {errorBreakdown.map((error, index) => (
              <div key={index} className="error-item">
                <div className="error-info">
                  <span className="error-type">{error.type}</span>
                  <span className="error-count">{error.count}</span>
                </div>
                <div className="error-bar">
                  <div 
                    className="error-fill"
                    style={{ width: `${error.percentage}%` }}
                  ></div>
                </div>
                <span className="error-percentage">{error.percentage}%</span>
              </div>
            ))}
          </div>
        </section>

        <section className="geographic-section">
          <h2>Geographic Distribution</h2>
          <div className="geographic-list">
            {geographicData.map((region, index) => (
              <div key={index} className="region-item">
                <div className="region-info">
                  <span className="region-name">{region.region}</span>
                  <span className="region-users">{region.users.toLocaleString()} users</span>
                </div>
                <div className="region-latency">
                  <span className={`latency-value ${region.latency > 200 ? 'high' : region.latency > 150 ? 'medium' : 'low'}`}>
                    {region.latency}ms
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* System Health */}
      <section className="system-health">
        <h2>System Health</h2>
        <div className="health-grid">
          <div className="health-metric">
            <div className="metric-label">CPU Usage</div>
            <div className="metric-bar">
              <div 
                className={`metric-fill ${systemHealth.cpu > 80 ? 'critical' : systemHealth.cpu > 60 ? 'warning' : 'good'}`}
                style={{ width: `${systemHealth.cpu}%` }}
              ></div>
            </div>
            <div className="metric-value">{systemHealth.cpu}%</div>
          </div>
          <div className="health-metric">
            <div className="metric-label">Memory Usage</div>
            <div className="metric-bar">
              <div 
                className={`metric-fill ${systemHealth.memory > 80 ? 'critical' : systemHealth.memory > 60 ? 'warning' : 'good'}`}
                style={{ width: `${systemHealth.memory}%` }}
              ></div>
            </div>
            <div className="metric-value">{systemHealth.memory}%</div>
          </div>
          <div className="health-metric">
            <div className="metric-label">Disk Usage</div>
            <div className="metric-bar">
              <div 
                className={`metric-fill ${systemHealth.disk > 80 ? 'critical' : systemHealth.disk > 60 ? 'warning' : 'good'}`}
                style={{ width: `${systemHealth.disk}%` }}
              ></div>
            </div>
            <div className="metric-value">{systemHealth.disk}%</div>
          </div>
          <div className="health-metric">
            <div className="metric-label">Network I/O</div>
            <div className="metric-bar">
              <div 
                className={`metric-fill ${systemHealth.network > 80 ? 'critical' : systemHealth.network > 60 ? 'warning' : 'good'}`}
                style={{ width: `${systemHealth.network}%` }}
              ></div>
            </div>
            <div className="metric-value">{systemHealth.network}%</div>
          </div>
        </div>
      </section>

      {/* Recent Events */}
      <section className="events-section">
        <h2>Recent Events</h2>
        <div className="events-list">
          <div className="event-item warning">
            <div className="event-time">2 minutes ago</div>
            <div className="event-message">High response time detected on /api/products endpoint</div>
          </div>
          <div className="event-item info">
            <div className="event-time">15 minutes ago</div>
            <div className="event-message">Deployment completed successfully - v2.1.3</div>
          </div>
          <div className="event-item error">
            <div className="event-time">1 hour ago</div>
            <div className="event-message">Database connection timeout - automatically resolved</div>
          </div>
          <div className="event-item info">
            <div className="event-time">3 hours ago</div>
            <div className="event-message">Scheduled maintenance completed</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplicationInsights;
