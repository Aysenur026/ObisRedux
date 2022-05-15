
 import { Form, Input, Button, Space } from 'antd';
 import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
 
 const Demo = () => {
   const onFinish = values => {
     console.log('Received values of form:', values);
   };
 
   return (
     <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
       <Form.List name="users">
         {(fields, { add, remove }) => (
           <>
             {fields.map(({ key, name, ...restField }) => (
               <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                 <Form.Item
                   {...restField}
                   name={[name, 'first']}
                   rules={[{ required: true, message: 'Missing first name' }]}
                 >
                   <Input placeholder="Ders İd" />
                 </Form.Item>
                 <Form.Item
                   {...restField}
                   name={[name, 'last']}
                   rules={[{ required: true, message: 'Missing last name' }]}
                 >
                   <Input placeholder="Ders Adı" />
                 </Form.Item>
                 <MinusCircleOutlined onClick={() => remove(name)} />
               </Space>
             ))}
             <Form.Item>
               <Button className='bg-success' type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                 Ekle
               </Button>
             </Form.Item>
           </>
         )}
       </Form.List>
       
     </Form>
   );
 };
 
export default Demo;