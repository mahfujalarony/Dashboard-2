export interface Order {
    trackingNo: string;
    productName: string;
    totalOrder: number;
    status: 'Approved' | 'Pending' | 'Rejected';
    totalAmount: string;
  }
  
  export const recentOrders: Order[] = [
    {
      trackingNo: '84564564',
      productName: 'Camera Lens',
      totalOrder: 40,
      status: 'Rejected',
      totalAmount: '$40,570',
    },
    {
      trackingNo: '84564564',
      productName: 'Laptop',
      totalOrder: 300,
      status: 'Pending',
      totalAmount: '$180,139',
    },
    {
      trackingNo: '84564564',
      productName: 'Mobile',
      totalOrder: 355,
      status: 'Approved',
      totalAmount: '$180,139',
    },
    {
      trackingNo: '84564564',
      productName: 'Camera Lens',
      totalOrder: 40,
      status: 'Rejected',
      totalAmount: '$40,570',
    },
    {
      trackingNo: '84564564',
      productName: 'Laptop',
      totalOrder: 300,
      status: 'Pending',
      totalAmount: '$180,139',
    },
    {
      trackingNo: '84564564',
      productName: 'Mobile',
      totalOrder: 355,
      status: 'Approved',
      totalAmount: '$180,139',
    },
    {
      trackingNo: '84564564',
      productName: 'Camera Lens',
      totalOrder: 40,
      status: 'Rejected',
      totalAmount: '$40,570',
    },
    {
      trackingNo: '84564564',
      productName: 'Laptop',
      totalOrder: 300,
      status: 'Pending',
      totalAmount: '$180,139',
    },
    {
      trackingNo: '84564564',
      productName: 'Mobile',
      totalOrder: 355,
      status: 'Approved',
      totalAmount: '$180,139',
    },
    {
      trackingNo: '84564564',
      productName: 'Mobile',
      totalOrder: 355,
      status: 'Approved',
      totalAmount: '$180,139',
    },
  ];
  