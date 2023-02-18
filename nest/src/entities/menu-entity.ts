/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-10 11:12:52
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-02-18 15:25:13
 * @FilePath: /nestjs-ts-vue3-vite/nest/src/entities/menu-entity.ts
 * @Description:
 *
 */
import { Entity, Column, ObjectIdColumn, OneToMany } from 'typeorm';
//每个实体对应的就是数据库中的表
@Entity('MenuList')
export class MenuList {
  //主键
  // @Column({
  //   type: 'int',
  //   unsigned: true,
  //   primary: true,
  //   generated: true,
  // })
  @ObjectIdColumn()
  id: number;
  @Column({ length: 100, comment: '菜单名' })
  name: string;
  @Column({ comment: '是否总是显示' })
  alwaysShow: boolean;
  @Column({ length: 100, comment: '菜单标题' })
  title: string;
  @Column({ comment: '父id' })
  parentId: Number;
  @Column({ comment: 'icon图标' })
  Icon: string;
  @Column({ comment: 'SvgIcon图标' })
  SvgIcon: string;
  @Column({ comment: '路径' })
  path:string;
  @Column({ comment: '组件' })
  component:string;
  @Column({ comment: '是否隐藏' })
  hidden: boolean;
  @Column({ comment: '是否缓存' })
  keepAlive: boolean;
  @Column({ comment: '排序' })
  sort: number;
  @Column({ comment: '重定向' })
  redirect: string;
  @Column({ comment: '权限名' })
  code: string;
  children: Array<MenuList>;
}
